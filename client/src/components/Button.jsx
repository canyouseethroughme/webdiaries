import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 13rem;
  height: 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.3s;

  :hover {
    background-color: #f0daa4;
  }
`;

const Button = (props) => {
  return (
    <StyledButton style={props.style} onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
};

export default Button;
