import React from "react";

function EndGameBanner({ gameStatus, correctAnswer }) {
  if (gameStatus.result === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {gameStatus.noAttempts}{" "}
            {gameStatus.noAttempts > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus.result === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      </div>
    );
  }
}

export default EndGameBanner;
