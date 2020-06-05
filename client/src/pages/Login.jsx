import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { login } from "../networking/users";
import { setAuthToken } from "../networking/HTTPservice";

import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Quote from "../components/Quote";
import ErrorMessage from "../components/ErrorMessage";
import BackgroundWrapper from "../components/BackgroundWrapper";
import FormWrapper from "../components/FormWrapper";
import StyledParagraph from "../components/StyledParagraph";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const loginUser = async () => {
    try {
      const { data } = await login({ username, password });
      setAuthToken(data.token);
      localStorage.setItem("token", data.token);
      history.push("/diaries");
    } catch (err) {
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 2000);
      console.log("====================================");
      console.log("There is a login problem. Error: ", err);
      console.log("====================================");
    }
  };

  return (
    <BackgroundWrapper>
      <FormWrapper>
        <Title name="Web Diaries" />
        <Quote>Your private online journal.</Quote>
      </FormWrapper>
      <FormWrapper>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: "20px" }}
          name="Login"
          onClick={loginUser}
        />
      </FormWrapper>
      {error && <ErrorMessage>Wrong credentials.</ErrorMessage>}
      <FormWrapper>
        <StyledParagraph>
          Don't have an account? Sign up{" "}
          <Link
            to="/sign-up"
            style={{ color: "#c29261", textDecoration: "none" }}
          >
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

export default Login;
