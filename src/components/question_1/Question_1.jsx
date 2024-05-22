import React from "react";
import "./question_1.css";
import { numbersArr } from "../costant";
const Question_1 = () => {
  const evenNumbers = [];

  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] % 2 === 0) {
      evenNumbers.push(numbersArr[i]);
    }
  }

  const result = evenNumbers.sort((a, b) => b - a);
  return (
    <div>
      <h1>Question one</h1>
      <h2>Solution</h2>
      <p>This array is displayed in descending order</p>
      {result.map((item) => (
        <li><i>{item}</i></li>
      ))}
    </div>
  );
};

export default Question_1;