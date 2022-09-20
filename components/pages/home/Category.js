import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles, Icons
import "swiper/css/bundle";
import { Flex, Text, Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Constants
import { CategoryImages } from "~/constants/CategoryConst";

export default function Category() {
	const sliderCenter = useBreakpointValue({ base: true, md: false });

	return (
		<Flex direction="column" gap={8}>
			<Flex direction="column">
				<Text color="brand.gray.800" fontSize={32} fontWeight="bold">
					Category
				</Text>
				<Text color="brand.gray.300" fontSize={14}>
					What are you currently looking for
				</Text>
			</Flex>
			<Flex h="220px">
				<Swiper
					modules={[Autoplay, Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView="auto"
					pagination={{ clickable: true, dynamicBullets: true }}
					style={{ width: "inherit" }}
					navigation
					loop
					centeredSlides={sliderCenter}
				>
					{CategoryImages.map(({ text, bg, url }, i) => (
						<SwiperSlide key={i} style={{ display: "flex", width: "220px", cursor: "pointer" }}>
							<Flex position="relative" align="center" justify="center" bg={bg} rounded="xl" w="full" p={9}>
								<Image src={url} boxSize="full" objectFit="contain" alt={text} />
								<Text position="absolute" color="white" fontSize={28} fontWeight="bold">
									{text}
								</Text>
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</Flex>
	);
}
