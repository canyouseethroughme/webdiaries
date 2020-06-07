import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { PropagateLoader } from "react-spinners";

import { DiariesContext } from "../DiariesContext";
import { SelectedDiaryContext } from "../SelectedDiaryContext";

import DiaryCard from "../DiaryCard";
import Paragraph from "../Paragraph";

const CenterContainerStyled = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 8.5rem;
  width: 18rem;
  height: 100vh;
  padding-top: 6rem;
  overflow: scroll;
`;

const spinnerStyle = {
  marginTop: "10rem",
};

const CenterContainer = () => {
  const [diaries, setDiaries] = useContext(DiariesContext);
  const [selectedDiary, setSelectedDiary] = useContext(SelectedDiaryContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <CenterContainerStyled className="containerDiaries">
        {loading ? (
          <PropagateLoader css={spinnerStyle} color={"#3d3d3d"} />
        ) : diaries.length > 0 ? (
          diaries.map((diary) => (
            <DiaryCard
              onClick={() => setSelectedDiary(diary.id)}
              key={diary.id}
              name={
                diary.title.charAt(0).toUpperCase() +
                diary.title.slice(1).substr(0, 35) +
                "..."
              }
              date={diary.updated_at.split("T")[0]}
              text={diary.text.substr(0, 90) + "..."}
            />
          ))
        ) : (
          <Paragraph style={spinnerStyle}>
            You don't have any diaries!
          </Paragraph>
        )}
      </CenterContainerStyled>
    </div>
  );
};

export default CenterContainer;
