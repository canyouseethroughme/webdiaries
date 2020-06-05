import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/login.jpg") no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const BackgroundWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default BackgroundWrapper;
