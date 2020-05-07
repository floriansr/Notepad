import React, { useState, useEffect } from "react";

import NoteDisplay from "components/NoteDisplay";

const MarkdownInput = () => {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [notes, setNotes] = useState([]);

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
			localStorage.setItem(title, value);
			const i = localStorage.length;
			const NewObject = [
				{
					id: i,
					title: title,
					description: value,
				},
			];
			// localStorage.clear();

			setNotes(notes.concat(NewObject));
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
				<button
					key={key}
					onClick={() =>
						NoteDisplay({
							value: note.description,
							title: note.title,
						})
					}
				>
					<h3>{note.title}</h3>
					<p>{note.description.substring(0, 10)}...</p>
				</button>
			))}
		</>
	);
};

export default MarkdownInput;
