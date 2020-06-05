import React from "react";
import styled from "styled-components";

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
  justify-items: center;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Title name="Web Diaries" style={{ fontSize: "25px" }} />
      <QOD />
      <Paragraph>profile</Paragraph>
    </HeaderStyle>
  );
};

export default Header;
