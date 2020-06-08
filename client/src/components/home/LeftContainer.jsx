import React, { useContext } from "react";
import styled from "styled-components";

import { DiariesContext } from "../DiariesContext";
import { SelectedDiaryContext } from "../SelectedDiaryContext";
import { getDiaries, getFavoriteDiaries } from "../../networking/diaries";

import Paragraph from "../Paragraph";
import Button from "../Button";

const LeftContainerStyle = styled.div`
  width: 13rem;
  height: 100vh;
  padding-top: 10rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 1fr);

  z-index: 10;
  background-color: #3d3d3d;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
`;

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: #4b4b4b;
  }
`;

const paragraphStyle = {
  fontWeight: "500",
  paddingLeft: "5px",
};

const buttonStyle = {
  backgroundColor: "transparent",
  color: "#f0daa4",
  width: "10rem",
  height: "1.8rem",
  boxShadow: "none",
  border: ".5px solid #f0daa4",
  justifySelf: "center",
  gridRowStart: "9",
  transition: ".3s",
};

const LeftContainer = () => {
  const [diaries, setDiaries] = useContext(DiariesContext);
  const [selectedDiary, setSelectedDiary] = useContext(SelectedDiaryContext);

  const createNewDiary = () => {
    setSelectedDiary(-1);
  };

  const getAllDiaries = async () => {
    const { data } = await getDiaries();
    setDiaries(data.response);
  };

  const getFavDiaries = async () => {
    const { data } = await getFavoriteDiaries();
    setDiaries(data.response);
  };
  return (
    <LeftContainerStyle>
      <ContainerStyle onClick={getAllDiaries}>
        <span role="img" aria-label="book">
          📔
        </span>
        <Paragraph style={paragraphStyle}>All diaries</Paragraph>
      </ContainerStyle>
      <ContainerStyle onClick={getFavDiaries}>
        <span role="img" aria-label="star">
          ⭐
        </span>
        <Paragraph style={paragraphStyle}>Favorites</Paragraph>
      </ContainerStyle>
      <Button
        name="New diary"
        style={buttonStyle}
        className="diaryButton"
        onClick={createNewDiary}
      />
    </LeftContainerStyle>
  );
};

export default LeftContainer;
