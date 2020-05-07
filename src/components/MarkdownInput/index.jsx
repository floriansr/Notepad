import React, { useState, useEffect } from "react";

import NoteDisplay from "components/NoteDisplay";

const MarkdownInput = () => {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [notes, setNotes] = useState([
		{
			id: "",
		},
		{
			tit: "",
		},
		{ description: "" },
	]);

	useEffect(() => {
		console.log("Component is Update");
	}, []);

	const changeValue = (e) => {
		setValue(e.target.value);
	};

	const changeTitle = (e) => {
		setTitle(e.target.value);
	};

	const saveForm = (e) => {
		e.preventDefault();

		if (value === "" || title === "") {
			console.log("not ok");
		} else {
			console.log("ok");
			localStorage.clear();

			localStorage.setItem(title, value);
			console.log(localStorage);

			for (let i = 0; i < localStorage.length; i++) {
				console.log(
					// i = id
					localStorage.key(i), // = tit
					localStorage.getItem(localStorage.key(i)) // = description
				);
			}
			// setSubmit(true);
		}
	};

	return (
		<>
			<NoteDisplay value={value} title={title} />

			<form onSubmit={saveForm}>
				<label>
					<input
						type="text"
						name={value}
						onChange={changeValue}
						placeholder="write here.."
					/>
				</label>

				<label>
					<input
						type="text"
						name={title}
						onChange={changeTitle}
						placeholder="title here.."
					/>
				</label>

				<input type="submit" value="Save me" />
			</form>

			{notes.map((note, key) => (
				<div key={key}>
					{note.id} {note.tit} {note.description}
				</div>
			))}
		</>
	);
};

export default MarkdownInput;

// {isSubmit ? MarkdownInput() : ""}

// const [isToggleOn, setToggle] = useState(false);

// const getName = () => {
// 	isToggleOn ? setToggle(false) : setToggle(true);
// };

// {isToggleOn ? (
// 	<>
// 		<label>
// 			<input
// 				type="submit"
// 				name={title}
// 				onChange={changeTitle}
// 				placeholder="put name here.."
// 			/>
// 		</label>
// 	</>
// ) : (
// 	""
// )}

// <button type="button" onClick={getName}>
// 	name me
// </button>
