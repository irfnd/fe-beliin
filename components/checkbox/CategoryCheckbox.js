// Styles, Icons
import { Box, Flex, Text } from "@chakra-ui/react";
import { useCheckbox } from "@chakra-ui/react";

export default function CategoryCheckbox(props) {
	const { getInputProps, getCheckboxProps, htmlProps } = useCheckbox(props);

	return (
		<Box as="label" cursor="pointer" {...htmlProps}>
			<input {...getInputProps()} hidden />
			<Flex
				align="center"
				justify="center"
				bg="transparent"
				border="0.1px solid"
				borderColor="brand.gray.200"
				rounded="xl"
				p={2}
				py={3}
				_checked={{
					bg: "brand.red.500",
					borderColor: "brand.red.500",
					color: "white",
				}}
				{...getCheckboxProps()}
			>
				<Text fontWeight="semibold">{props.children}</Text>
			</Flex>
		</Box>
	);
}
