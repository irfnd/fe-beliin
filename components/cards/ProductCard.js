import useCurrency from "~/helpers/hooks/useCurrency";

// Styles, Icons
import { Flex, Text, Icon, Image } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

export default function ProductCard(props) {
	const { product } = props;

	return (
		<Flex direction="column" rounded="xl" shadow="lg" w="full" cursor="pointer">
			<Flex h="150px">
				<Image src={product.image} alt={product.name} objectFit="cover" w="full" roundedTop="xl" />
			</Flex>
			<Flex direction="column" p={4} gap={1.5}>
				<Text fontSize={16} fontWeight="medium">
					{product.name}
				</Text>
				<Flex direction="column">
					<Text color="brand.red.500" fontSize={20} fontWeight="medium">
						{useCurrency(product.price)}
					</Text>
					<Text color="brand.gray.300" fontSize={14} fontWeight="medium">
						{product.seller}
					</Text>
				</Flex>
				<Flex align="center">
					{[...Array(product.rating)].map((_, i) => (
						<Icon key={i} as={HiStar} fontSize={20} color="#FFBA49" />
					))}
					<Text color="brand.gray.300" fontSize={12} ml={2}>
						({product.review})
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
