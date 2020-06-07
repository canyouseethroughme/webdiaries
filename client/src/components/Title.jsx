import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Shrikhand", cursive;
  font-size: 40px;
  color: #f0932b;
`;

const Title = (props) => {
  return <StyledTitle style={props.style}>{props.name}</StyledTitle>;
};

export default Title;
