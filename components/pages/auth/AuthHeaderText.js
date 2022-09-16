// Styles, Icons
import { Text } from "@chakra-ui/react";

export default function AuthHeaderText(props) {
	const { text } = props;
	return (
		<Text color="brand.gray.800" fontWeight="bold" fontSize={18}>
			{text}
		</Text>
	);
}
