import "assets/scss/styles.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import MarkdownInput from "components/MarkdownInput";

import * as serviceWorker from "./serviceWorker";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<MarkdownInput />
			</>
		);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
