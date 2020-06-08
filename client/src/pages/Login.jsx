import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

import { login } from "../networking/users";
import { setAuthToken } from "../networking/HTTPservice";

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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const history = useHistory();

  const loginUser = async () => {
    try {
      if (username.length > 3 || password.length > 3) {
        const { data } = await login({ username, password });
        setLoader(false);
        setAuthToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        history.push("/diaries");
      }
    } catch (err) {
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 2000);
      console.log("====================================");
      console.log("There is a login problem. Error: ", err.message);
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
          placeholder="Username*"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password*"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loader ? (
          <Button
            style={{ marginTop: "20px" }}
            name="Login"
            onClick={loginUser}
          />
        ) : (
          <PropagateLoader color={"#f3f3f3"} css={spinnerStyle} />
        )}
      </FormWrapper>

      {error && <ErrorMessage>Wrong credentials.</ErrorMessage>}

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
          Forgot your password? Reset it{" "}
          <Link
            to="/forgot-password"
            style={{ color: "#c29261", textDecoration: "none" }}
          >
            here
          </Link>
          .
        </Paragraph>
      </FormWrapper>
    </BackgroundWrapper>
  );
};

export default Login;
