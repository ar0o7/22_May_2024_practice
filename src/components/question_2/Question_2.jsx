import React from "react";
import "./question_2.css";
import { finalQuestion } from "../costant";
const Question_2 = () => {
  const arr = [];
  for (let i = 0; i < finalQuestion.length; i++) {
    for (let j = 0; j < finalQuestion[i].length; j++) {
      arr.push(finalQuestion[i][j]);
    }
  }

  const asending = (arr.sort((a,b) => a-b));
  return (
    <div>
      <h1>Question two</h1>
      <h2>Solution</h2>
      {asending.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default Question_2;
