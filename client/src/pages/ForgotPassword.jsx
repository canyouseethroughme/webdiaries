import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { forgotPassword } from "../networking/users";

import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Quote from "../components/Quote";
import ErrorMessage from "../components/ErrorMessage";
import BackgroundWrapper from "../components/BackgroundWrapper";
import FormWrapper from "../components/FormWrapper";
import Paragraph from "../components/Paragraph";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const forgotPass = async () => {
    try {
      if (!email || email.length < 6) {
        setEmailError(true);
        setTimeout(function () {
          setEmailError(false);
        }, 2000);
      } else {
        await forgotPassword({ email });
        history.push("/");
      }
    } catch (err) {
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 2000);
      console.log("====================================");
      console.log("There is a forgot password problem. Error: ", err);
      console.log("====================================");
    }
  };

  return (
    <BackgroundWrapper>
      <FormWrapper>
        <Title name="Web Diaries" />
        <Quote name="Your private online journal." />
      </FormWrapper>
      <FormWrapper>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          style={{ marginTop: "20px" }}
          name="Reset password"
          onClick={forgotPass}
        />
      </FormWrapper>
      {error && <ErrorMessage>Email not valid.</ErrorMessage>}
      {emailError && <ErrorMessage>Please insert your email.</ErrorMessage>}
      <FormWrapper>
        <Paragraph>
          Don't have an account? Sign up{" "}
          <Link
            to="/sign-up"
            style={{ color: "#c29261", textDecoration: "none" }}
          >
            here
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Remembered your password? Log in{" "}
          <Link to="/" style={{ color: "#c29261", textDecoration: "none" }}>
            here
          </Link>
          .
        </Paragraph>
      </FormWrapper>
    </BackgroundWrapper>
  );
};

export default ForgotPassword;
