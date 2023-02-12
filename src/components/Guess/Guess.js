import React from "react";
import { LENGTH_OF_WORDS } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer = "" }) {
	const realGuess = guess?.guess?.length > 0;
	const emptyArr = range(LENGTH_OF_WORDS).map((e) => "");

	const guessSplit = realGuess ? guess.guess.split("") : emptyArr;

	const checkObj = realGuess ? checkGuess(guess.guess, answer) : emptyArr;

	return (
		<p className="guess" key={guess.id || Math.random()}>
			{guessSplit.map((letter, index) => (
				<span
					className={`cell ${
						checkObj[index]?.status || checkObj[index]
					}`}
					key={index}
				>
					{letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
