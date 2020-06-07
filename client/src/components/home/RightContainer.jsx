import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";

import {
  getOneDiary,
  updateDiary,
  deleteDiary,
} from "../../networking/diaries";

import { SelectedDiaryContext } from "../SelectedDiaryContext";
import Paragraph from "../Paragraph";
import Button from "../Button";
import notebook from "../../static/notebook.png";

// ####################################

const WrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-block;
  overflow: hidden;

  border-radius: 5px;
  background-color: #3d3d3d;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
`;

const DiaryButtons = styled.div`
  height: 8rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ContainerStyle = styled.div`
  height: 100%;
  padding: 30px 30px 0 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 5rem auto;
`;

const titleStyle = {
  fontWeight: "600",
  height: "100%",
  width: "100%",
  color: "#f0daa4",
  fontFamily: "Poppins, sans-serif",
  fontSize: "25px",
  backgroundColor: "#3d3d3d",
  border: "none",
  outline: "none",
};

const dateStyle = {
  fontSize: "13px",
  justifySelf: "end",
};

const textareaStyle = {
  gridColumn: "1 / span 2",
  fontFamily: "Poppins, sans-serif",
  fontSize: "15px",
  marginTop: "30px",
  paddingBottom: "50px",
  height: "70%",
  color: "#f3f3f3",
  backgroundColor: "#3d3d3d",
  border: "none",
  outline: "none",
};

const notebookStyle = {
  justifySelf: "center",
  marginTop: "5%",
  gridColumn: "1 / span 2",
  width: "50%",
  height: "auto",
};

const nodiaryStyle = {
  fontSize: "25px",
  justifySelf: "center",
  gridColumn: "1 / span 2",
  color: "#f0daa4",
  fontWeight: "500",
};

const buttonStyle = {
  backgroundColor: "transparent",
  color: "#f0daa4",
  width: "8rem",
  height: "1.8rem",
  boxShadow: "none",
  border: ".5px solid #f0daa4",
  marginRight: "30px",
  transition: ".3s",
};

// ####################################

const RightContainer = () => {
  const [selectedDiary, setSelectedDiary] = useContext(SelectedDiaryContext);
  const [diaryID, setDiaryID] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [favorite, setFavorite] = useState(3);
  const [updatedTime, setUpdatedTime] = useState("");
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selectedDiary !== 0) {
      getDiary(selectedDiary);
    }
  }, [selectedDiary]);

  const getDiary = async (id) => {
    const {
      data: { diary },
    } = await getOneDiary(id);
    setDiaryID(diary[0].id);
    setTitle(diary[0].title);
    setText(diary[0].text);
    setFavorite(diary[0].favorite);
    setUpdatedTime(diary[0].updated_at.split("T")[0]);
  };

  return (
    <WrapperStyle>
      {selectedDiary === 0 ? (
        <ContainerStyle style={{ marginTop: "10rem" }}>
          <Paragraph style={nodiaryStyle}>
            Write a new diary or maybe read an older one.
          </Paragraph>
          <img src={notebook} style={notebookStyle} alt="notebook" />
        </ContainerStyle>
      ) : (
        <>
          <DiaryButtons>
            <Button
              name={editable ? "Save diary" : "Edit diary"}
              style={buttonStyle}
              className="diaryButton"
              onClick={
                editable
                  ? async () => {
                      await updateDiary(diaryID, { title, text, favorite: 0 });
                      setEditable(!editable);
                    }
                  : () => setEditable(!editable)
              }
            />
            <Button
              name="Delete diary"
              style={buttonStyle}
              className="diaryButton"
              onClick={async () => {
                await deleteDiary(diaryID);
              }}
            />
          </DiaryButtons>
          <ContainerStyle>
            <textarea
              style={titleStyle}
              maxLength={60}
              value={title}
              disabled={editable ? false : true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Paragraph style={dateStyle}>
              {updatedTime}
              {favorite === 1 ? (
                <span role="img" aria-label="star">
                  ⭐
                </span>
              ) : (
                <span role="img" aria-label="star">
                  ✩
                </span>
              )}
            </Paragraph>
            <textarea
              style={textareaStyle}
              value={text}
              disabled={editable ? false : true}
              onChange={(e) => setText(e.target.value)}
            />
          </ContainerStyle>
        </>
      )}
    </WrapperStyle>
  );
};
export default RightContainer;
