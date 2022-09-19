// Styles, Icons
import { Flex, Text, Icon } from "@chakra-ui/react";
import { BiBell, BiEnvelope } from "react-icons/bi";

export default function NavbarMobileMenu() {
	return (
		<Flex direction="column" gap={8}>
			<Flex justify="space-between" align="center" cursor="pointer">
				<Text fontWeight="semibold">Notifications</Text>
				<Icon as={BiBell} fontSize={24} color="brand.gray.400" />
			</Flex>
			<Flex justify="space-between" align="center" cursor="pointer">
				<Text fontWeight="semibold">Messages</Text>
				<Icon as={BiEnvelope} fontSize={24} color="brand.gray.400" />
			</Flex>
		</Flex>
	);
}
