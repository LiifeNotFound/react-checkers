import Square from "../Square/square";
import "./horizontalSquares.css";

export default (props) => (
	<div
		className={
			"horizontalSquares " +
			(props.isInverted == "true" ? "inverted" : "")
		}
	>
		<Square {...props} type="black-square" />
		<Square type="white-square" />
		<Square {...props} type="black-square" />
		<Square type="white-square" />
		<Square {...props} type="black-square" />
		<Square type="white-square" />
		<Square {...props} type="black-square" />
		<Square type="white-square" />
	</div>
);
