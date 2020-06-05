import React from "react";
import styled from "styled-components";

import Paragraph from "../Paragraph";
import Button from "../Button";

const LeftMenuStyle = styled.div`
  width: 13rem;
  height: 100vh;
  padding-top: 10rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr 2fr;
  align-items: top;
  justify-items: center;

  z-index: 10;
  background-color: #3d3d3d;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
`;

const LeftMenu = () => {
  return (
    <LeftMenuStyle>
      <Paragraph style={{ fontWeight: "500" }}>All diaries</Paragraph>
      <Paragraph style={{ fontWeight: "500" }}>Months</Paragraph>
      <Button name="New diary" style={{ width: "10rem" }} />
    </LeftMenuStyle>
  );
};

export default LeftMenu;
