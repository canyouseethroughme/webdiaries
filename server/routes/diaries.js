const router = require("express").Router();
// Models
const Diary = require("../models/Diary");
const User = require("../models/User");
// Authentification
const { isAuthenticated } = require("../middleware/auth");

// #######################################################################################
// create diary
router.post("/create-diary", isAuthenticated, async (req, res) => {
  const { title, text, favorite } = req.body;
  try {
    if (!title || !text) {
      return res
        .status(401)
        .send({ response: "missing title or text in new diary." });
    }
    const newDiary = await Diary.query().insert({
      user_id: req.userId,
      title,
      text,
      favorite,
    });
    res.status(200).send({ response: newDiary });
  } catch (err) {
    if (err) {
      console.log(`there was a problem creating a new diary with: ${err}`);
      return;
    }
  }
});

// #######################################################################################
// read all diaries
router.get("/", isAuthenticated, async (req, res) => {
  try {
    const diaries = await Diary.query()
      .select()
      .orderBy("updated_at", "desc")
      .where({ user_id: req.userId });
    res.status(200).send({ response: diaries });
  } catch (err) {
    if (err) {
      console.log(`error reading your diaries with ${err}`);
      return;
    }
  }
});

// #######################################################################################
// read favorite diary
router.get("/favorite-diaries", isAuthenticated, async (req, res) => {
  try {
    const favoriteDiaries = await Diary.query()
      .select()
      .orderBy("updated_at", "desc")
      .where({ user_id: req.userId, favorite: true });
    res.status(200).send({ response: favoriteDiaries });
  } catch (err) {
    if (err) {
      console.log(`error reading your favorite diaries with ${err}`);
      return;
    }
  }
});

// #######################################################################################
// read one diary
router.get("/:id", isAuthenticated, async (req, res) => {
  const diaryId = req.params.id;

  try {
    const diary = await Diary.query().select().where({ id: diaryId });
    const user = await User.query().select().where({ id: req.userId });
    // read diary only for the logged in user
    if (diary[0].user_id !== user[0].id) {
      res
        .status(401)
        .send({ response: "not allowed to see other peoples diaries." });
    }
    res.status(200).send({ diary });
  } catch (err) {
    if (err) {
      console.log(`error reading diary with id: ${diaryId} with ${err}`);
      return;
    }
  }
});

// #######################################################################################
// update diary
router.put("/update-diary/:id", isAuthenticated, async (req, res) => {
  const diaryId = req.params.id;
  const { title, text, favorite } = req.body;

  try {
    const diary = await Diary.query().select().where({ id: diaryId });
    const user = await User.query().select().where({ id: req.userId });
    // update diary only for the logged in user
    if (diary[0].user_id !== user[0].id) {
      res
        .status(401)
        .send({ response: "not allowed to update other peoples diaries." });
    }

    if (!title || !text) {
      return res
        .status(401)
        .send({ response: "missing title or text when updating diary." });
    }
    const updateTitle = await Diary.query()
      .where({ id: diaryId })
      .update({ title });

    const updateText = await Diary.query()
      .where({ id: diaryId })
      .update({ text });

    const updateFavorite = await Diary.query()
      .where({ id: diaryId })
      .update({ favorite });

    res.status(200).send({ updateTitle, updateText, updateFavorite });
  } catch (err) {
    if (err) {
      console.log(`error updating diary with id: ${diaryId} with ${err}`);
      return;
    }
  }
});

// #######################################################################################
// delete diary
router.delete("/delete-diary/:id", isAuthenticated, async (req, res) => {
  const diaryId = req.params.id;
  try {
    const diary = await Diary.query().select().where({ id: diaryId });
    const user = await User.query().select().where({ id: req.userId });
    // delete diary only for the logged in user
    if (diary[0].user_id !== user[0].id) {
      res
        .status(401)
        .send({ response: "not allowed to delete other peoples diaries." });
    }

    const deleteDiary = await Diary.query().where({ id: diaryId }).del();
    res.status(200).send({ deleteDiary });
  } catch (err) {
    if (err) {
      console.log(`error deleting diary with id: ${diaryId} with ${err}`);
      return;
    }
  }
});

module.exports = router;
