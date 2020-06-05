import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { signup } from "../networking/users";

import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Quote from "../components/Quote";
import ErrorMessage from "../components/ErrorMessage";
import BackgroundWrapper from "../components/BackgroundWrapper";
import FormWrapper from "../components/FormWrapper";
import StyledParagraph from "../components/StyledParagraph";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const history = useHistory();

  const signupUser = async () => {
    try {
      if (
        username.length < 3 ||
        firstName.length < 3 ||
        lastName.length < 3 ||
        email.length < 6
      ) {
        setError(true);
        setTimeout(function () {
          setError(false);
        }, 2000);
      } else if (password !== repeatedPassword || password.length < 7) {
        setPassError(true);
        setTimeout(function () {
          setPassError(false);
        }, 2000);
      } else {
        const { data } = await signup({
          username,
          firstName,
          lastName,
          email,
          password,
          repeatedPassword,
        });
        console.log("====================================");
        console.log("New user registered.", data);
        console.log("====================================");
        history.push("/");
      }
    } catch (err) {
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 2000);
      console.log("====================================");
      console.log("There is a signup problem. Error: ", err);
      console.log("====================================");
    }
  };
  return (
    <BackgroundWrapper>
      <FormWrapper>
        <Title name="Web Diaries" />
        <Quote>Your private online journal.</Quote>
      </FormWrapper>
      <FormWrapper style={{ marginTop: "30px" }}>
        <Input
          type="text"
          placeholder="Username*"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="First Name*"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name*"
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email*"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password*"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Repeat password*"
          onChange={(e) => setRepeatedPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: "20px" }}
          onClick={signupUser}
          name="Create account"
        />
      </FormWrapper>
      {passError && <ErrorMessage>Passwords don't match.</ErrorMessage>}
      {error && <ErrorMessage>Missing or incomplete fields.</ErrorMessage>}
      <FormWrapper>
        <StyledParagraph>
          Already have an account? Log in{" "}
          <Link to="/" style={{ color: "#c29261", textDecoration: "none" }}>
            here
          </Link>
          .
        </StyledParagraph>
        <StyledParagraph>
          Forgot your password? Reset it{" "}
          <Link
            to="/forgot-password"
            style={{ color: "#c29261", textDecoration: "none" }}
          >
            here
          </Link>
          .
        </StyledParagraph>
      </FormWrapper>
    </BackgroundWrapper>
  );
};

export default Signup;
