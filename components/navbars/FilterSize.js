// Styles, Icons
import { Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { useCheckboxGroup } from "@chakra-ui/react";

// Components, Images
import SizeCheckbox from "~/components/checkbox/SizeCheckbox";

// Constants
import { SizeFilter } from "~/constants/FilterConst";

export default function FilterSize() {
	const { getCheckboxProps } = useCheckboxGroup();

	return (
		<Flex direction="column" gap={4}>
			<Text color="brand.gray.800" fontSize={16} fontWeight="semibold">
				Sizes
			</Text>
			<Wrap spacing={4}>
				{SizeFilter.map((el, i) => (
					<WrapItem key={i}>
						<SizeCheckbox {...getCheckboxProps({ value: el })}>{el}</SizeCheckbox>
					</WrapItem>
				))}
			</Wrap>
		</Flex>
	);
}
