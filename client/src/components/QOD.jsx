import React, { useState, useEffect } from "react";
import { quoteInstance } from "../networking/HTTPservice";

import Quote from "./Quote";

const QOD = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const result = await quoteInstance.get(
        "https://quotes.rest/qod?language=en"
      );
      if (!result.data.contents.quotes[0].quote) {
        throw new Error("No quote fetched.");
      }
      setQuote(result.data.contents.quotes[0].quote);
    } catch (err) {
      setQuote(
        "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth."
      );
      console.log("====================================");
      console.log("Too many requests for QOD with error:", err.message);
      console.log("====================================");
    }
  };

  return <Quote name={quote} />;
};

export default QOD;
