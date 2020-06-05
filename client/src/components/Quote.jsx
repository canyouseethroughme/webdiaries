import React from "react";
import styled from "styled-components";

const StyledQuote = styled.h3`
  color: #eff0f1;
  font-size: 22px;
  font-family: "Pacifico", cursive;
`;

const Quote = (props) => {
  return <StyledQuote>{props.children}</StyledQuote>;
};

export default Quote;
