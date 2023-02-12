import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GameBoard({ guesses, answer }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((row, index) =>
				guesses[index] ? (
					<Guess key={index} guess={guesses[index]} answer={answer} />
				) : (
					<Guess key={index} guess="" />
				)
			)}
		</div>
	);
}

export default GameBoard;
