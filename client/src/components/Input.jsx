import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 13rem;
  height: 2rem;
  background-color: #404040;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  outline: none;
  padding-left: 5px;
  ::placeholder {
    color: white;
  }
`;

const Input = (props) => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
    />
  );
};

export default Input;
