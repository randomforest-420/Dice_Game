import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="contain">
      <h2>How to play dice game</h2>
      <div className="text">
      <p>Select any number</p>
      <p>Click on dice image </p>
      <p>
        After clicking on the dice if selected number is equal to the dice number you will
        get same point as dice{" "}
      </p>
      <p>if your guess is wrong then 2 point will be dedcuted</p>
      </div>
    </div>
  );
};

export default Rules;
