import React, { useState, createContext } from "react";

export const SelectedDiaryContext = createContext();

export const SelectedDiaryProvier = (props) => {
  const [selectedDiary, setSelectedDiary] = useState(0);
  return (
    <SelectedDiaryContext.Provider value={[selectedDiary, setSelectedDiary]}>
      {props.children}
    </SelectedDiaryContext.Provider>
  );
};
