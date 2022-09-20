// Styles, Icons
import { Flex, Text } from "@chakra-ui/react";

export default function SubTitle(props) {
	const { title, desc } = props;

	return (
		<Flex direction="column">
			<Text color="brand.gray.800" fontSize={32} fontWeight="bold">
				{title}
			</Text>
			<Text color="brand.gray.300" fontSize={14}>
				{desc}
			</Text>
		</Flex>
	);
}
