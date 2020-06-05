import React from "react";
import styled from "styled-components";

import DiaryCard from "../DiaryCard";

const CenterContainerStyled = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  width: 18rem;
  height: 100vh;
  padding-top: 6rem;
  overflow: scroll;
`;

const CenterContainer = () => {
  return (
    <CenterContainerStyled>
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
    </CenterContainerStyled>
  );
};

export default CenterContainer;
