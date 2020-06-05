import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 13rem;
  height: 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.3s;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);

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
