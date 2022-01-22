import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const CustomTypography = withStyles((theme) => ({
	root: {
		fontFamily: "Nunito",
	},
}))(Typography);
