import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({guessList}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        var guess = guessList[index] ? guessList[index] : {id: Math.random(), label: ''}
        return <Guess key={guess.id} guess={guess.label}></Guess>
      })}

    </div>
  );
}

export default GuessResults;
