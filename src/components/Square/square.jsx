import "./square.css";

function App(props) {
	return (
		<>
			<div
				className={
					"square " +
					props.type +
					" " +
					(props.pieceType || "")
				}
			/>
		</>
	);
}

export default App;
