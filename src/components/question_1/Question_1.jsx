import React from "react";
import "./question_1.css";
import { numbersArr } from "../costant";
const Question_1 = () => {
 // const evenNumbers = [];

  // for (let i = 0; i < numbersArr.length; i++) {
  //   if (numbersArr[i] % 2 === 0) {
  //     evenNumbers.push(numbersArr[i]);
  //   }
  // }

 // const result = evenNumbers.sort((a, b) => b - a);
  return (
    <div>
      <h1>Question one</h1>
      <h2>Solution</h2>
      <h3>Test branch added</h3>
      <p>hello</p>
      <p>This array is displayed in descending order</p>
      {numbersArr.filter(number => number % 2 === 0).sort((a, b) => a - b).map(number => 
        <li>{number}</li>)}
    </div>
  );
};

export default Question_1;
