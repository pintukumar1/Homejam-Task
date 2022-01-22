import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./CircleStyles";
import { CustomTypography } from "../CustomTypography";

const Circle = ({ data }) => {
	const classes = useStyles();
	const { icon, label, count, isActive } = data;
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			className={
				isActive
					? `${classes.circle} ${classes.activeCircle}`
					: classes.circle
			}>
			<Grid
				className={isActive ? classes.cancelTransform : null}
				container
				alignItems='center'
				alignContent='center'
				justify='center'
				direction='column'>
				<Grid item xs={12}>
					<img src={icon} alt='icon' />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5' color='primary'>
						{count}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<CustomTypography variant='subtitle2' color='primary'>
						{label}
					</CustomTypography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Circle;
