import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import { useWidth } from "../../hooks/useWidth";
import { SHOWS_DATA } from "../../constants/ShowsData";
import { CustomTypography } from "../Common/CustomTypography";
import ShowsCard from "../Common/ShowsCard/ShowsCard";
import "./UpcomingShows.scss"; // Import Swiper React components
const UpcomingShows = () => {
	const width = useWidth();
	return (
		<div className='upcoming-shows'>
			<Container>
				<Grid container spacing={5}>
					<Grid
						container
						item
						xs={12}
						justify='space-between'
						alignItems='center'>
						<Grid item>
							<Typography
								variant={width === "xs" ? "h6" : "h4"}
								color='primary'>
								<span className='underline-this'>Up</span>
								coming Shows
							</Typography>
						</Grid>
						<Grid item>
							<CustomTypography
								variant='subtitle1'
								color='secondary'>
								View all
							</CustomTypography>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Swiper
							spaceBetween={width === "xs" ? 20 : null}
							slidesPerView={width === "xs" ? 1.2 : 4}>
							{SHOWS_DATA.map((data, index) => {
								return (
									<SwiperSlide
										key={index}
										className='swiper-slide'>
										<ShowsCard data={data} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default UpcomingShows;
