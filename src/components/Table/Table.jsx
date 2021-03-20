import "./table.css";
import HorizontalSquares from "../HorizontalSquares/horizontalSquares";

var x = 1;

function App(props) {
	return (
		<>
			<div className="table">
				<HorizontalSquares {...props} pieceType="black-pieces" />
				<HorizontalSquares
					{...props}
					pieceType="black-pieces"
					isInverted="true"
				/>
				<HorizontalSquares {...props} pieceType="black-pieces" />
				<HorizontalSquares
					{...props}
					isInverted="true"
				/>
				<HorizontalSquares {...props} />
				<HorizontalSquares pieceType="white-pieces"
					{...props}
					isInverted="true"
				/>
				<HorizontalSquares pieceType="white-pieces" {...props} />
				<HorizontalSquares pieceType="white-pieces"
					{...props}
					isInverted="true"
				/>
			</div>
		</>
	);
}

export default App;
