// Styles, Icons
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useCheckboxGroup } from "@chakra-ui/react";

// Components, Images
import CategoryCheckbox from "~/components/checkbox/CategoryCheckbox";

// Constants
import { CategoryFilter } from "~/constants/FilterConst";

export default function FilterCategory() {
	const { getCheckboxProps } = useCheckboxGroup();

	return (
		<Flex direction="column" gap={4}>
			<Text color="brand.gray.800" fontSize={16} fontWeight="semibold">
				Category
			</Text>
			<SimpleGrid columns={3} spacingX={4} spacingY={3}>
				{CategoryFilter.map((el, i) => (
					<CategoryCheckbox key={i} {...getCheckboxProps({ value: el })}>
						{el}
					</CategoryCheckbox>
				))}
			</SimpleGrid>
		</Flex>
	);
}
