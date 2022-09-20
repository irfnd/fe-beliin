// Styles, Icons
import { Flex, Text, Icon } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

export default function FilterBrand() {
	return (
		<Flex align="center" justify="space-between" cursor="pointer">
			<Flex direction="column" gap={2}>
				<Text color="brand.gray.800" fontSize={16} fontWeight="semibold">
					Brand
				</Text>
				<Text fontSize={12} color="brand.gray.300">
					Adidas Originals, Jack & Jones, s.Oliver
				</Text>
			</Flex>
			<Icon as={BiChevronDown} fontSize={32} color="brand.gray.800" />
		</Flex>
	);
}
