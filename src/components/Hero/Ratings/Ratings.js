import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import { CIRCLE_DATA } from "../../../constants/CircleData";
import { useWidth } from "../../../hooks/useWidth";
import Circle from "../../Common/Circle/Circle";
const Rating = () => {
	const width = useWidth();
	return (
		<Swiper spaceBetween={40} slidesPerView={width === "xs" ? 1.8 : 4}>
			{CIRCLE_DATA.map((data, index) => {
				return (
					<SwiperSlide key={index}>
						<Circle data={data} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Rating;
