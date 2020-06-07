import React, { useState, createContext } from "react";

export const DiariesContext = createContext();

export const DiariesProvider = (props) => {
  const [diaries, setDiaries] = useState([]);
  return (
    <DiariesContext.Provider value={[diaries, setDiaries]}>
      {props.children}
    </DiariesContext.Provider>
  );
};
