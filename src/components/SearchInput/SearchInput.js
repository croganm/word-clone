import React from "react";

function SearchInput({ handleGuess, result }) {
	const [input, setInput] = React.useState("");

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(e) => {
				e.preventDefault();
				if (input.length != 5)
					return window.alert("Word not the right length");
				handleGuess(input);
				setInput("");
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				disabled={!!result}
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
		</form>
	);
}

export default SearchInput;
