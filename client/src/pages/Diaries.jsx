import React from "react";
import styled from "styled-components";

import Header from "../components/home/Header";
import LeftContainer from "../components/home/LeftContainer";
import CenterContainer from "../components/home/CenterContainer";
import RightContainer from "../components/home/RightContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem 19rem auto;
`;

const Diaries = () => {
  return (
    <div>
      <Header />
      <Container>
        <LeftContainer />
        <CenterContainer />
        <RightContainer />
      </Container>
    </div>
  );
};

export default Diaries;
