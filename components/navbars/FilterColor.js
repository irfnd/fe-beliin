// Styles, Icons
import { Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { useCheckboxGroup } from "@chakra-ui/react";

// Components, Images
import ColorCheckbox from "~/components/checkbox/ColorCheckbox";

// Constants
import { ColorFilter } from "~/constants/FilterConst";

export default function FilterColor() {
	const { getCheckboxProps } = useCheckboxGroup();

	return (
		<Flex direction="column" gap={4}>
			<Text color="brand.gray.800" fontSize={16} fontWeight="semibold">
				Colors
			</Text>
			<Wrap spacing={2}>
				{ColorFilter.map(({ value, color }, i) => (
					<WrapItem key={i}>
						<ColorCheckbox {...getCheckboxProps({ value })} color={color} />
					</WrapItem>
				))}
			</Wrap>
		</Flex>
	);
}
