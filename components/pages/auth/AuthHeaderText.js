// Styles, Icons
import { Flex, Text } from "@chakra-ui/react";

export default function AuthHeaderText(props) {
	const { text, info } = props;
	return (
		<>
			<Text color="brand.gray.800" fontWeight="bold" fontSize={18}>
				{text}
			</Text>
			{info && (
				<Flex
					w={{ base: "full", sm: "75%", md: "65%", lg: "55%", xl: "35%" }}
					textAlign="center"
					px={{ base: 4, sm: 0 }}
				>
					<Text fontSize={14} color="brand.gray.300">
						{info}
					</Text>
				</Flex>
			)}
		</>
	);
}
