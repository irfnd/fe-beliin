// Styles, Icons
import { Flex } from "@chakra-ui/react";

// Components, Images
import SubTitle from "~/components/pages/home/SubTitle";
import SliderCategoryCard from "~/components/cards/SliderCategoryCard";

export default function Category() {
	return (
		<Flex direction="column" gap={8}>
			<SubTitle title="Category" desc="What are you currently looking for" />
			<SliderCategoryCard />
		</Flex>
	);
}
