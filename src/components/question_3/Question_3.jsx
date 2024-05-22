/* eslint-disable */
import React from "react";
import "./question_3.css";
import { students } from "../costant";
const Question_3 = () => {
  const arrry = [];

  for (let i = 0; i < students.length; i++) {
    arrry.push(students[i]);
  }
  const display = arrry.sort((a, b) => a.id - b.id);

  return (
    <div className="mt-5">
      <h1>Question Three</h1>
      <h2>Solution</h2>
      <p>This array is displayed in ascending order</p>
      {display.map((item) => (
        <li key={item.id}>
          {item.name} is at {item.id}
        </li>
      ))}
    </div>
  );
};

export default Question_3;
