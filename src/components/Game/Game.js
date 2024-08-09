import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndGameBanner from "../EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Button from "../Button/Button";


function Game() {
  const initialGameStatus = {
    isGameOver: false,
    noAttempts: 0,
    result: "",
  };
  const [answer, setAnswer] = React.useState(sample(WORDS))
  console.info({ answer });

  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(initialGameStatus);

  function checkGuess(guess) {
    updateGameStatus(guess);
    const guessBreakdown = [];
    for (var i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        guessBreakdown.push({ letter: guess[i], status: "correct" });
      } else if (answer.includes(guess[i])) {
        guessBreakdown.push({ letter: guess[i], status: "misplaced" });
      } else {
        guessBreakdown.push({ letter: guess[i], status: "incorrect" });
      }
    }
    return guessBreakdown;
  }

  function updateGameStatus(guess) {
    gameStatus.noAttempts++;
    const newGameStatus = { ...gameStatus };
    if (guess === answer) {
      newGameStatus.isGameOver = true;
      newGameStatus.result = "win";
    } else if (gameStatus.noAttempts === NUM_OF_GUESSES_ALLOWED) {
      newGameStatus.isGameOver = true;
      newGameStatus.result = "lose";
    }
    setGameStatus(newGameStatus);
  }

  function addNewGuess(guess) {
    const newGuessItem = { id: Math.random(), label: checkGuess(guess) };
    const newGuessList = [...guessList, newGuessItem];
    setGuessList(newGuessList);
  }

  function restartGame(){
    setAnswer(sample(WORDS))
    setGuessList([])
    setGameStatus(initialGameStatus)
  }
  return (
    <>
      {gameStatus.isGameOver && (
        <EndGameBanner
          gameStatus={gameStatus}
          correctAnswer={answer}
        ></EndGameBanner>
      )}
      {gameStatus.isGameOver && (
        <Button action={restartGame} actionText="Restart"></Button>
      )}
      <GuessResults guessList={guessList}></GuessResults>
      <GuessInput
        addNewGuess={addNewGuess}
        isGameOver={gameStatus.isGameOver}
      ></GuessInput>
    </>
  );
}

export default Game;
