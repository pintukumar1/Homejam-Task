import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import { REVIEWS } from "../../constants/ReviewsData";
import { useWidth } from "../../hooks/useWidth";
import ReviewCard from "../Common/ReviewCard/ReviewCard";
import "./Reviews.scss";

const Reviews = () => {
	const width = useWidth();
	return (
		<div className='reviews'>
			<Container>
				<Grid container spacing={5}>
					<Grid item>
						<Typography
							variant={width === "xs" ? "h6" : "h4"}
							color='primary'>
							<span className='underline-this'>Re</span>
							views
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Swiper
							spaceBetween={width === "xs" ? 40 : null}
							slidesPerView={width === "xs" ? 1 : 3}>
							{REVIEWS.map((data, index) => {
								return (
									<SwiperSlide
										key={index}
										className='swiper-slide'>
										<ReviewCard data={data} />
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

export default Reviews;
