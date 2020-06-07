import React from "react";
import styled from "styled-components";

import Paragraph from "./Paragraph";

const DiaryCardStyle = styled.div`
  width: 17rem;
  height: 7rem;
  margin-bottom: 1.3rem;
  padding: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  overflow: hidden;

  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  border-radius: 5px;
  background-color: #3d3d3d;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);

  :hover {
    opacity: 1;
  }
`;
const titleStyle = {
  fontWeight: "500",
  color: "#f0daa4",
};

const dateStyle = {
  fontSize: "10px",
  justifySelf: "end",
};
const paragraphStyle = {
  gridColumn: "1 / span 2",
  fontSize: "10px",
};

const DiaryCard = (props) => {
  return (
    <DiaryCardStyle onClick={props.onClick}>
      <Paragraph style={titleStyle}>{props.name}</Paragraph>
      <Paragraph style={dateStyle}>{props.date}</Paragraph>
      <Paragraph style={paragraphStyle}>{props.text}</Paragraph>
    </DiaryCardStyle>
  );
};

export default DiaryCard;
