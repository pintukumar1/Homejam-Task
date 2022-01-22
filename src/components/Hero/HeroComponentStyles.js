import { makeStyles } from "@material-ui/core/styles";
import { heroImage, heroImageMobile } from "../../assets";
export const heroComponentStyles = makeStyles((theme) => ({
	heroContainer: {
		minHeight: "100vh",
		backgroundImage: `url(${heroImage})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		[theme.breakpoints.down("sm")]: {
			backgroundImage: `url(${heroImageMobile})`,
		},
	},
	ratings: {
		minHeight: " 100vh",
		width: "100vw",
		position: " absolute",
		background: "rgba(5, 11, 20, 0.28)",
	},
	overlayContainer: {
		height: "100vh",
	},
}));
