import React from "react";
import styled from "styled-components";

const StyledQuote = styled.h3`
  color: #eff0f1;
  font-size: 38px;
  font-family: "Lovers Quarrel", cursive;
`;

const Quote = (props) => {
  return <StyledQuote>{props.name}</StyledQuote>;
};

export default Quote;
