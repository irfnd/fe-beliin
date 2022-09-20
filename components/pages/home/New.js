// Styles, Icons
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

// Components, Images
import ProductCard from "~/components/cards/ProductCard";

// Constants
const product = {
	image: "/assets/product-1.png",
	name: "Men's formal suit - Black & White",
	price: 40,
	seller: "Zalora Cloth",
	rating: 5,
	review: 10,
};

export default function New() {
	return (
		<Flex direction="column" gap={8}>
			<Flex direction="column">
				<Text color="brand.gray.800" fontSize={32} fontWeight="bold">
					New
				</Text>
				<Text color="brand.gray.300" fontSize={14}>
					You&apos;ve never seen it before!
				</Text>
			</Flex>
			<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={8}>
				{[...Array(15)].map((_, i) => (
					<ProductCard key={i} product={product} />
				))}
			</SimpleGrid>
		</Flex>
	);
}
