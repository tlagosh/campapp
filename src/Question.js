import React from "react";
import "./Question.css";

const Question = ({ question }) => (
    <div>
        <h2 className="questiontext">{question}</h2>
    </div>
);

export default Question;