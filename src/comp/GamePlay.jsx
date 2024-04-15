import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";
import "./GamePlay.css";
const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(" ");
  const [rules, showRules] = useState(false);
  const setVisible = () => {
    showRules((prev) => !prev);
  };
  const reset = () => {
    setScore(0);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError(" ");

    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    console.log(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <main>
      <div className="flex">
        <TotalScore score={score} />
        <div className="end">
          <div>
            <p className="error">{error}</p>
          </div>
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
      </div>
      <div className="score">
        <RollDice
          currentDice={currentDice}
          rollDice={rollDice}
          reset={reset}
          setVisible={setVisible}
        />
      </div>
      <div className="rule">{rules ? <Rules /> : ""}</div>
    </main>
  );
};

export default GamePlay;
