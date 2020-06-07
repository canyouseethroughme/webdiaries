import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

// import { setAuthToken } from "../networking/HTTPservice";

import Button from "../Button";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";
import Paragraph from "../Paragraph";
import QOD from "../QOD";

const HeaderStyle = styled.div`
  position: absolute;
  height: 5rem;
  width: 100%;
  display: grid;
  background-color: #3d3d3d;
  grid-template-columns: 2fr 10fr 2fr;
  align-items: center;
  padding: 0 1.5rem;

  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

const titleStyle = {
  fontSize: "25px",
};

const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <HeaderStyle>
      <Title name="Web Diaries" style={titleStyle} />
      <QOD />
      <Button
        style={{
          fontWeight: "600",
          justifySelf: "end",
          backgroundColor: "transparent",
        }}
        onClick={logout}
        name="Logout"
      />
    </HeaderStyle>
  );
};

export default Header;
