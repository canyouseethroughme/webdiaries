import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { setAuthToken } from "../networking/HTTPservice";
import { getDiaries } from "../networking/diaries";

import Header from "../components/home/Header";
import LeftContainer from "../components/home/LeftContainer";
import CenterContainer from "../components/home/CenterContainer";
import RightContainer from "../components/home/RightContainer";

import { DiariesContext } from "../components/DiariesContext";
import { SelectedDiaryProvier } from "../components/SelectedDiaryContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem 19rem auto;
`;

const Diaries = () => {
  const [diaries, setDiaries] = useContext(DiariesContext);
  const history = useHistory();

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  } else {
    localStorage.clear();
    history.push("/");
  }

  useEffect(() => {
    getDiariesList();
  }, []);

  const getDiariesList = async () => {
    try {
      const { data } = await getDiaries();
      const list = data.response;
      setDiaries(list);
    } catch (err) {
      if (err) {
        console.log("====================================");
        console.log("Error geting the diaries with error: ", err.message);
        console.log("====================================");
      }
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <LeftContainer />
        <SelectedDiaryProvier>
          <CenterContainer />
          <RightContainer />
        </SelectedDiaryProvier>
      </Container>
    </div>
  );
};

export default Diaries;
