import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Styles, Icons
import "swiper/css/bundle";
import { Flex, Text, Image, IconButton } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Constants
import { PromotionImages } from "~/constants/PromotionConst";

export default function Promotion() {
	return (
		<Flex position="relative" h={200}>
			<Swiper
				modules={[Autoplay, Pagination]}
				spaceBetween={20}
				slidesPerView="auto"
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{ clickable: true, dynamicBullets: true }}
				style={{ width: "inherit", position: "static" }}
				centeredSlides
				loop
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
				<PrevButton />
				<NextButton />
			</Swiper>
		</Flex>
	);
}

function PrevButton() {
	const swiper = useSwiper();

	return (
		<IconButton
			icon={<BiChevronLeft size={32} />}
			colorScheme="brand.red"
			position="absolute"
			rounded="full"
			top="50%"
			left={0}
			transform="translate(-50%, -50%)"
			zIndex={2}
			onClick={() => swiper.slidePrev()}
		/>
	);
}

function NextButton() {
	const swiper = useSwiper();

	return (
		<IconButton
			icon={<BiChevronRight size={32} />}
			colorScheme="brand.red"
			position="absolute"
			rounded="full"
			top="50%"
			right={0}
			transform="translate(50%, -50%)"
			zIndex={2}
			onClick={() => swiper.slideNext()}
		/>
	);
}
