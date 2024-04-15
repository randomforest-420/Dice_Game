import { useState } from "react";
import StartGame from "./comp/StartGame";
import GamePlay from "./comp/GamePlay";
import './App.css'
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toogleGamePlay} />}</>;
}

export default App;
