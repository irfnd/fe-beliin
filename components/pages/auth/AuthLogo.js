// Styles, Icons
import { Flex, Text, Icon } from "@chakra-ui/react";
import { HiShoppingBag } from "react-icons/hi";

export default function AuthLogo() {
	return (
		<Flex align="center" color="brand.red.500">
			<Icon as={HiShoppingBag} fontSize={60} />
			<Text fontWeight="bold" fontSize={28} lineHeight={0}>
				Beli.in
			</Text>
		</Flex>
	);
}
