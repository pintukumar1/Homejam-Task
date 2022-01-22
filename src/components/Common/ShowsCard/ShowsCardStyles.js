import { makeStyles } from "@material-ui/core/styles";
export const showsCardStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#111229",
		width: 276,
		height: 395,
		[theme.breakpoints.down("sm")]: {
			width: 268,
			height: 387,
		},
		borderRadius: ".5rem",
		boxShadow: "5px -5px 1px 1px rgb(48,26,104)",
	},
	media: {
		height: 230,
	},
	moreInfo: {
		color: "#0259EB",
	},
	flag: {
		width: "80px",
		height: "20px",
		color: "#682F26",
		fontWeight: 500,
		backgroundColor: "#E5C558",
	},
}));
