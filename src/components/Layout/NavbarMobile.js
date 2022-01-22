import {
	AppBar,
	Backdrop,
	Container,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
	basketIcon,
	hamburgerIcon,
	homeJamLogo,
	searchIcon,
} from "../../assets";

const backDropStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));

const NavbarMobile = () => {
	const classes = backDropStyles();
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<AppBar color='transparent' elevation={0}>
				<Container>
					<Grid container justify='space-between'>
						<Grid item xs={3}>
							<img src={homeJamLogo} alt='homejam logo' />
						</Grid>
						<Grid
							container
							item
							xs={8}
							justify='flex-end'
							alignItems='center'
							spacing={4}>
							<Grid item>
								<img src={searchIcon} alt='search icon' />
							</Grid>

							<Grid item>
								<img src={basketIcon} alt='basket icon' />
							</Grid>
							<Grid item>
								<IconButton
									color='primary'
									aria-label='open nav menu'
									onClick={handleToggle}>
									<img
										src={hamburgerIcon}
										alt='hamburger icon'
									/>
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</AppBar>
			<Backdrop
				className={classes.backdrop}
				open={open}
				onClick={handleClose}>
				<List>
					<ListItem>
						<Link>Home</Link>
					</ListItem>
					<ListItem>
						<Link>Help</Link>
					</ListItem>
					<ListItem>
						<Link>Account</Link>
					</ListItem>
				</List>
			</Backdrop>
		</>
	);
};

export default NavbarMobile;
