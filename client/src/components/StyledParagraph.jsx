import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 15px;
  color: #eff0f1;
`;

const StyledParagraph = (props) => {
  return <Paragraph style={props.style}>{props.children}</Paragraph>;
};

export default StyledParagraph;
