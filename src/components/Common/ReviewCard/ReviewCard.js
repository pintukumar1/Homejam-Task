import { Typography } from "@material-ui/core";
import { Avatar, Card, CardContent, CardHeader, Box } from "@material-ui/core";
import React from "react";
import { CustomTypography } from "../CustomTypography";
import { reviewCardStyles } from "./ReviewCardStyles";

const ReviewCard = ({ data }) => {
	const { picture, name, flag, review, location } = data;
	const classes = reviewCardStyles();
	return (
		<Card className={classes.root}>
			<CardHeader
				className={classes.header}
				avatar={<Avatar aria-label='avatar' src={picture} alt={name} />}
				title={
					<Typography
						variant='subtitle1'
						color='primary'
						className={classes.name}>
						{name}
					</Typography>
				}
				subheader={
					<CustomTypography
						variant='caption'
						color='secondary'
						className={classes.location}>
						<img src={flag} alt={flag} />
						&nbsp;
						{location}
					</CustomTypography>
				}
			/>
			<CardContent>
				<Box justifyContent='center' alignItems='center'>
					<CustomTypography variant='subtitle1' color='primary'>
						{review}
					</CustomTypography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ReviewCard;
