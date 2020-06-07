import React from "react";
import styled from "styled-components";

const StyledQuote = styled.h3`
  color: #eff0f1;
  font-size: 30px;
  font-family: "Caveat", cursive;
`;

const Quote = (props) => {
  return <StyledQuote style={props.style}>{props.name}</StyledQuote>;
};

export default Quote;
