import useCurrency from "~/helpers/hooks/useCurrency";

// Styles, Icons
import { Flex, SimpleGrid, Text, Icon, Image } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

// Components, Images
import ColorCheckbox from "~/components/checkbox/ColorCheckbox";

// Constants
import { ProductConst } from "~/constants/ProductConst";

export default function ProductDetail(props) {
	const { product } = props;
	const { getRadioProps } = useRadioGroup();

	return (
		<Flex gap="4">
			<SimpleGrid columns={2} spacing={12} h="full">
				<SimpleGrid columns={2} spacing={8} h="auto">
					{ProductConst.images.map(({ alt, url }, i) => (
						<Flex key={i} boxSize="full">
							<Image src={url} alt={alt} objectFit="cover" />
						</Flex>
					))}
				</SimpleGrid>
				<Flex direction="column" gap={6} h="full">
					<Flex direction="column" gap={1}>
						<Text fontSize={28} fontWeight="semibold" color="brand.gray.800">
							{ProductConst.name}
						</Text>
						<Text fontSize={16} fontWeight="medium" color="brand.gray.400">
							{ProductConst.seller}
						</Text>
						<Flex align="center">
							{[...Array(ProductConst.rating)].map((_, i) => (
								<Icon key={i} as={HiStar} fontSize={20} color="#FFBA49" />
							))}
							<Text color="brand.gray.300" fontSize={12} ml={2}>
								({ProductConst.review})
							</Text>
						</Flex>
					</Flex>
					<Flex direction="column" gap={1}>
						<Text fontSize={16} fontWeight="medium" color="brand.gray.400">
							Price
						</Text>
						<Text fontSize={32} fontWeight="bold" color="brand.gray.800">
							{useCurrency(ProductConst.price)}
						</Text>
					</Flex>
					<Flex direction="column" gap={1}>
						<Text fontSize={16} fontWeight="medium" color="brand.gray.400">
							Color
						</Text>
						<Flex gap={1}>
							{ProductConst.colors.map(({ value, color }, i) => (
								<ColorCheckbox key={i} {...getRadioProps({ value })} color={color} />
							))}
						</Flex>
					</Flex>
				</Flex>
			</SimpleGrid>
		</Flex>
	);
}
