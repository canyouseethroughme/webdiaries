import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  align-content: center;
  justify-items: center;

  :first-child {
    padding-top: 50px;
  }
  :nth-child(2) {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  :last-child {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
`;

const FormWrapper = (props) => {
  return (
    <StyledContainer style={props.style}>{props.children}</StyledContainer>
  );
};

export default FormWrapper;
