import { AppBar, Container, Grid } from "@material-ui/core";
import React from "react";
import { basketIcon, homeJamLogo, searchIcon } from "../../assets";
import { CustomTypography } from "../Common/CustomTypography";
const NavbarDesktop = () => {
	return (
		<AppBar color='transparent' elevation={0}>
			<Container>
				<Grid container justify='space-between'>
					<Grid item xs={3}>
						<img src={homeJamLogo} alt='homejam logo' />
					</Grid>
					<Grid
						container
						item
						xs={6}
						justify='flex-end'
						alignItems='center'
						spacing={8}>
						<Grid item>
							<CustomTypography
								variant='subtitle2'
								color='primary'>
								<img src={searchIcon} alt='search icon' />
								&nbsp; Search
							</CustomTypography>
						</Grid>
						<Grid item>
							<CustomTypography
								variant='subtitle2'
								color='primary'>
								Help
							</CustomTypography>
						</Grid>
						<Grid item>
							<CustomTypography
								variant='subtitle2'
								color='primary'>
								Account
							</CustomTypography>
						</Grid>
						<Grid item>
							<img src={basketIcon} alt='basket icon' />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
};

export default NavbarDesktop;
