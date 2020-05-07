import React from "react";
import Showdown from "showdown";

const converter = new Showdown.Converter();

const NoteDisplay = ({ value, title }: NoteDisplay) => {
	console.log(value);
	console.log(title);

	const createMarkup = () => {
		return {
			__html: converter.makeHtml(value),
		};
	};

	return (
		<>
			{title}
			<div dangerouslySetInnerHTML={createMarkup()} />
		</>
	);
};

export default NoteDisplay;
