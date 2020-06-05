import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Shrikhand", cursive;
  font-size: 40px;
  color: #f0daa4;
`;

const Title = (props) => {
  return <StyledTitle>{props.name}</StyledTitle>;
};

export default Title;
