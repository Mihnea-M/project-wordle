import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        if (guess) {
          var className = `cell ${guess[index].status}`;
          return (
            <span className={className} key={index}>
              {guess[index].letter}
            </span>
          );
        } else {
          return <span className="cell" key={index}></span>;
        }
      })}
    </p>
  );
}

export default Guess;
