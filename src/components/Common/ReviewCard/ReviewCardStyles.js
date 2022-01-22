import { makeStyles } from "@material-ui/core/styles";
export const reviewCardStyles = makeStyles((theme) => ({
	root: {
		color: "#fff",
		backgroundColor: "#111229",
		width: 368,
		height: 256,
		[theme.breakpoints.down("sm")]: {
			width: 300,
			height: 240,
		},
		border: "2px solid #E5AF56",
		borderRadius: ".5rem",
		boxShadow: "5px -5px 1px 1px rgb(39,108,115)",
	},
	header: {
		color: "#fff",
	},
	name: {
		fontFamily: "Quattrocento ",
	},
	location: {
		display: "flex",
		alignItems: "center",
		textTransform: "uppercase",
	},
}));
