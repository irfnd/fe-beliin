// Styles, Icons
import { Flex, SimpleGrid } from "@chakra-ui/react";

// Components, Images
import SubTitle from "~/components/pages/home/SubTitle";
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
			<SubTitle title="New" desc="You've never seen it before!" />
			<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={8}>
				{[...Array(15)].map((_, i) => (
					<ProductCard key={i} product={product} />
				))}
			</SimpleGrid>
		</Flex>
	);
}
