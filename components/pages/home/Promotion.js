import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles, Icons
import "swiper/css/bundle";
import { Flex, Text, Image } from "@chakra-ui/react";

// Constants
import { PromotionImages } from "~/constants/PromotionConst";

export default function Promotion() {
	return (
		<Flex h={200}>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView="auto"
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{ clickable: true, dynamicBullets: true }}
				style={{ width: "inherit" }}
				loop
				navigation
				centeredSlides
			>
				{PromotionImages.map(({ text, url }, i) => (
					<SwiperSlide key={i} style={{ display: "flex", width: "500px", cursor: "pointer" }}>
						<Flex position="relative" align="center" justify="center" w="full">
							<Image src={url} boxSize="full" objectFit="cover" rounded="xl" alt={text} />
							<Text position="absolute" color="white" fontSize={{ base: 24, sm: 38 }} fontWeight="bold">
								{text}
							</Text>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}
