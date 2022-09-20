import { useSelector } from "react-redux";

// Styles, Icons
import { Flex, Icon } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { BiBell, BiEnvelope } from "react-icons/bi";

export default function ShoppingChart() {
	const { isLoggedIn } = useSelector((state) => state.auth);

	return (
		isLoggedIn && (
			<Flex align="center" justify="center" cursor="pointer" gap={6} mr={8}>
				<Icon
					as={BsCart2}
					fontSize={24}
					color="brand.gray.400"
					_hover={{ color: "brand.red.500" }}
					_active={{ color: "brand.red.600" }}
				/>
				<Icon
					display={{ base: "none", md: "block" }}
					as={BiBell}
					fontSize={24}
					color="brand.gray.400"
					_hover={{ color: "brand.red.500" }}
					_active={{ color: "brand.red.600" }}
				/>
				<Icon
					display={{ base: "none", md: "block" }}
					as={BiEnvelope}
					fontSize={24}
					color="brand.gray.400"
					_hover={{ color: "brand.red.500" }}
					_active={{ color: "brand.red.600" }}
				/>
			</Flex>
		)
	);
}
