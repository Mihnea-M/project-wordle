import React from "react";

function GuessInput({ addNewGuess, isGameOver }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        addNewGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        title="5 letters"
        disabled={isGameOver}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
