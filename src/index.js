import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Table from "./components/Table/Table.jsx";

ReactDOM.render(
	<React.StrictMode>
		<h1>
			Checkers | Developed by{" "}
			<a href="http://t04-hendrick.vigion.pt">
				Hendrik Lelis
			</a>{" "}
			| Working on it{" "}
      | Started at 20/3/2001
		</h1>
		<Table newGame />
	</React.StrictMode>,
	document.getElementById("root")
);
