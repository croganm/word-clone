import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchInput from "../SearchInput/SearchInput";
import GameBoard from "../GameBoard/GameBoard";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [result, setResult] = React.useState("");

	function handleGuess(val) {
		const uppercaseGuess = val.toUpperCase();
		const guessObj = [
			...guesses,
			{
				id: Math.random(),
				guess: uppercaseGuess,
			},
		];
		setGuesses(guessObj);

		if (uppercaseGuess === answer) return setResult("won");

		if (guessObj.length === NUM_OF_GUESSES_ALLOWED)
			return setResult("lost");
	}
	return (
		<>
			<GameBoard guesses={guesses} answer={answer} />
			{result === "won" && (
				<Banner type="happy">
					<p>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>
							{guesses.length}{" "}
							{guesses.length === 1 ? "guess" : "guesses"}
						</strong>
						.
					</p>
				</Banner>
			)}
			{result === "lost" && (
				<Banner type="sad">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</Banner>
			)}
			<SearchInput handleGuess={handleGuess} result={result} />
		</>
	);
}

export default Game;
