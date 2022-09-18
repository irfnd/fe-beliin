import { useRouter } from "next/router";

// Styles, Icons
import { Flex, Text, Icon } from "@chakra-ui/react";
import { HiShoppingBag } from "react-icons/hi";

export default function BrandLogo() {
	const router = useRouter();

	return (
		<Flex align="end" color="brand.red.500" cursor="pointer" onClick={() => router.push("/")}>
			<Icon as={HiShoppingBag} fontSize={32} />
			<Text fontWeight="bold" fontSize={18}>
				Beli.in
			</Text>
		</Flex>
	);
}
