import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

import { updatePassword } from "../networking/users";

import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Quote from "../components/Quote";
import ErrorMessage from "../components/ErrorMessage";
import BackgroundWrapper from "../components/BackgroundWrapper";
import FormWrapper from "../components/FormWrapper";
import Paragraph from "../components/Paragraph";

const spinnerStyle = {
  margin: "auto",
  width: "1rem",
  height: "2rem",
  marginTop: "20px",
};

const UpdatePassword = () => {
  const [newPassword, setPassword] = useState("");
  const [newRepeatedPassword, setRepeatedPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const history = useHistory();

  const updatePass = async () => {
    try {
      if (newPassword !== newRepeatedPassword) {
        setPassError(true);
        setTimeout(function () {
          setPassError(false);
        }, 2000);
      } else if (newPassword.length < 6) {
        setError(true);
        setTimeout(function () {
          setError(false);
        }, 2000);
      } else {
        setLoader(false);
        setTimeout(() => {
          setLoader(true);
        }, 2000);
        const token = window.location.href.split("/")[4];
        updatePassword(token, { newPassword, newRepeatedPassword });
        history.push("/");
      }
    } catch (err) {
      console.log("====================================");
      console.log("There is a update password problem. Error: ", err);
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
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setRepeatedPassword(e.target.value)}
        />
        {loader ? (
          <Button
            style={{ marginTop: "20px" }}
            name="Change password"
            onClick={updatePass}
          />
        ) : (
          <PropagateLoader color={"#f3f3f3"} css={spinnerStyle} />
        )}
      </FormWrapper>
      {error && (
        <ErrorMessage>Password must have more than 6 characters.</ErrorMessage>
      )}
      {passError && (
        <ErrorMessage>Inserted passwords don't match.</ErrorMessage>
      )}
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

export default UpdatePassword;
