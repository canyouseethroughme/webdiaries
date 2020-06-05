import React from "react";
import StyledParagraph from "./StyledParagraph";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  position: absolute;
  bottom: 140px;
  left: 0;
  right: 0;
`;
const ErrorMessage = (props) => {
  return (
    <Wrapper>
      <StyledParagraph style={{ color: "#e74c3c", fontWeight: "500" }}>
        {props.children}
      </StyledParagraph>
    </Wrapper>
  );
};

export default ErrorMessage;
