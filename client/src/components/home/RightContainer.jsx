import React from "react";
import styled from "styled-components";

import Paragraph from "../Paragraph";

const ContainerStyle = styled.div`
  height: calc(100vh - 6rem);
  width: calc(100% - 1.5rem);
  margin-top: 6rem;
  padding: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 4rem auto;

  border-radius: 5px;
  background-color: #3d3d3d;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.18),
    0 3px 14px 2px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.12);
`;

const titleStyle = {
  fontWeight: "600",
  color: "#f0daa4",
  fontSize: "25px",
  justifySelf: "center",
  alignSelf: "center",
};

const dateStyle = {
  fontSize: "13px",
  justifySelf: "end",
  alignSelf: "center",
};

const paragraphStyle = {
  gridColumn: "1 / span 2",
  fontSize: "17px",
  marginTop: "5px",
};

const RightContainer = () => {
  return (
    <ContainerStyle>
      <Paragraph style={titleStyle}>My first journal note</Paragraph>
      <Paragraph style={dateStyle}>5 jun 2020</Paragraph>
      <Paragraph style={paragraphStyle}>
        What is Lorem Ipsumdas asd asd asd asd dsa asd dsa asd Lorem Ipsum is
        simply dummy text of the printing and <br />
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text as?
      </Paragraph>
    </ContainerStyle>
  );
};
export default RightContainer;
