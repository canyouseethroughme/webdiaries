const router = require("express").Router();
// bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;
// JWT
const jwt = require("jsonwebtoken");
// Models
const User = require("../models/User");
const Token = require("../models/Token");
const Diary = require("../models/Diary");
// Authentification
const { isAuthenticated } = require("../middleware/auth");
// Nodemailer
const { transporter } = require("../config/nodemailer");
// #######################################################################################
// user login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username && password) {
      const users = await User.query().select().where({ username }).limit(1);
      const user = users[0];

      if (!user) {
        return res.status(401).send({ response: "wrong credentials" });
      }
      bcrypt.compare(password, user.password, async (error, isSame) => {
        if (error) {
          return res.status(500).send({
            response: "something went wrong with the password",
            error,
          });
        }
        if (!isSame) {
          return res.status(404).send({ response: "wrong credentials" });
        } else {
          const token = jwt.sign(
            { userId: user.id, username: user.username },
            "averysecretkeythatisveryhardtofind"
          );
          const previousToken = await Token.query()
            .select()
            .where({ user_id: user.id })
            .limit(1);

          if (!previousToken[0]) {
            await Token.query().insert({
              token,
              ttl: 360000,
              user_id: user.id,
            });
          } else {
            await Token.query().where({ user_id: user.id }).del();
            await Token.query().insert({
              token,
              ttl: 360000,
              user_id: user.id,
            });
          }
          return res.status(200).send({ username: user.username, token });
        }
      });
    } else {
      return res
        .status(404)
        .send({ response: "missing username and password" });
    }
  } catch (err) {
    if (err) {
      console.log(`Error on login route with message: ${err}`);
      return;
    }
  }
});
// #######################################################################################
// user signup route
router.post("/signup", (req, res) => {
  const {
    username,
    password,
    repeatedPassword,
    firstName,
    lastName,
    email,
  } = req.body;

  if (
    username &&
    password &&
    repeatedPassword &&
    password === repeatedPassword &&
    email
  ) {
    if (password.length < 7) {
      return res
        .status(404)
        .send({ response: "inserted password is too short" });
    } else {
      bcrypt.hash(password, saltRounds, async (error, hashedPass) => {
        if (error) {
          return res.status(500).send({ response: `error in db ${error}` });
        }

        try {
          const existingUser = await User.query()
            .select()
            .where({ username })
            .limit(1);

          if (existingUser[0]) {
            return res.status(404).send({ response: "user already exists" });
          } else {
            const newUser = await User.query().insert({
              username,
              password: hashedPass,
              first_name: firstName,
              last_name: lastName,
              email,
            });
            // NODEMAILER
            const mailOptions = {
              from: "WebDiaries",
              to: email,
              subject: "WebDiaries Account Created",
              text: `Welcome, ${username} to your online diary.`,
            };
            transporter.sendMail(mailOptions, (err, data) => {
              if (err) {
                res
                  .status(403)
                  .json({ response: "Problems creating the account, ", err });
                console.log("Email error", err);
                return;
              } else {
                return res.status(200).send({ response: newUser.username });
              }
            });
            // #################
          }
        } catch (err) {
          if (err) {
            console.log(err);
            return;
          }
        }
      });
    }
  } else if (password !== repeatedPassword) {
    return res
      .status(404)
      .send({ response: "password and repeated password are not the same" });
  } else {
    return res.status(404).send({ response: "missing fields" });
  }
});

// #######################################################################################
// user delete route
router.delete("/delete-account", isAuthenticated, async (req, res) => {
  try {
    const deleteUser = await User.query().where({ id: req.userId }).del();
    res.status(200).send({ deletedUser: deleteUser });
  } catch (err) {
    if (err) {
      console.log(`delete user error: ${err}`);
      return;
    }
  }
});

// #######################################################################################
// user forgot password route
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const token = await jwt.sign({ email }, "averysecretkeythatisveryhardtofind");

  await User.query()
    .select()
    .where({ email })
    .update({ reset_password: token });

  // NODEMAILER
  const mailOptions = {
    from: "WebDiaries",
    to: email,
    subject: "Reset password for WebDiaries",
    text: `Visit this link to reset your password for WebDiaries.
http://localhost:3000/update-password/${token}
      `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res
        .status(403)
        .send({ response: "problems reseting your password, ", err });
      return;
    } else {
      res.status(200).send({ response: `reset password for ${email}` });
    }
  });
  // #################
});

module.exports = router;
