import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 15px;
  color: #eff0f1;
`;

const Paragraph = (props) => {
  return (
    <StyledParagraph style={props.style}>{props.children}</StyledParagraph>
  );
};

export default Paragraph;
