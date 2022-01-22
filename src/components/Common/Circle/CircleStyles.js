import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	circle: {
		margin: "1rem 0 1rem 0",
		height: "13rem",
		width: "13rem",
		[theme.breakpoints.down("sm")]: {
			height: "9rem",
			width: "9rem",
		},
		borderRadius: " 50%",
		border: " 1px solid rgb(160, 157, 157)",

		// //for anti-aliasing
		boxShadow: "0 0 1px 0px white inset, 0 0 1px 0px white",
	},
	activeCircle: {
		borderTop: "1px solid #dd4cac",
		borderRight: "1px solid #dd4cac",
		borderBottom: "1px solid #dd4cac",
		transform: "rotate(45deg)",
	},
	cancelTransform: {
		transform: "rotate(-45deg)",
	},
}));
