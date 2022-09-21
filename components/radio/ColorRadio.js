// Styles, Icons
import { Box } from "@chakra-ui/react";
import { useRadio } from "@chakra-ui/react";

export default function ColorRadio(props) {
	const { getInputProps, getCheckboxProps, htmlProps } = useRadio(props);
	const { color } = props;

	return (
		<Box as="label" cursor="pointer" {...htmlProps}>
			<input {...getInputProps()} hidden />
			<Box
				bg="transparent"
				boxSize={14}
				border="0.1px solid"
				borderColor="transparent"
				rounded="full"
				_checked={{
					border: "0.1px solid",
					borderColor: "brand.red.500",
				}}
				p={1}
				{...getCheckboxProps()}
			>
				<Box bg={color} boxSize="full" rounded="full" shadow="md" />
			</Box>
		</Box>
	);
}
