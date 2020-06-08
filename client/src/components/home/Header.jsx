import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { deleteAccount } from "../../networking/users";
import { setAuthToken } from "../../networking/HTTPservice";

import Button from "../Button";
import Title from "../Title";
import QOD from "../QOD";

const HeaderStyle = styled.div`
  position: absolute;
  height: 5rem;
  width: 100%;
  display: grid;
  background-color: #3d3d3d;
  grid-template-columns: 2fr 10fr 2fr;
  align-items: center;
  padding: 0 30px;

  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

const titleStyle = {
  fontSize: "25px",
};

const dropdownMenu = {
  display: "grid",
  backgroundColor: "#4b4b4b",
  border: ".5px solid #f0daa4",
  marginTop: "5px",
  borderRadius: "5px",
  width: "8rem",
  boxShadow:
    "0 5px 5px -3px rgba(0, 0, 0, 0.18), 0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12)",
};

const Header = () => {
  const history = useHistory();

  const token = localStorage.getItem("token");
  const username =
    localStorage.getItem("username").charAt(0).toUpperCase() +
    localStorage.getItem("username").slice(1);

  if (token) {
    setAuthToken(token);
  } else {
    localStorage.clear();
    history.push("/");
  }

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const deleteUser = () => {
    deleteAccount();
    localStorage.clear();
    history.push("/");
  };
  return (
    <HeaderStyle>
      <Title name="Web Diaries" style={titleStyle} />
      <QOD />
      <details>
        <summary>{username}</summary>
        <div style={dropdownMenu}>
          <Button className="summaryButton" onClick={logout} name="Logout" />
          <Button
            className="summaryButton"
            onClick={deleteUser}
            name="Delete account"
          />
        </div>
      </details>
    </HeaderStyle>
  );
};

export default Header;
