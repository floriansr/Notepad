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

			console.log(localStorage.length);

			for (let i = 0; i <= localStorage.length; i++) {
				let t = localStorage.key(i);
				let d = localStorage.getItem(localStorage.key(i));

				const NewObject = [
					{
						id: i,
						title: t,
						description: d,
					},
				];

				setNotes((notes) => notes.concat(NewObject));

				// localStorage.clear();
			}
			console.log(notes);
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
					<h3>{note.title}</h3>
					<p>{note.description}</p>
				</div>
			))}
		</>
	);
};

export default MarkdownInput;

// //reinitialiser avant map
