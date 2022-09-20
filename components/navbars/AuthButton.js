import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// Styles, Icons
import { Flex, Button } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Components, Images
import AccordionUser from "~/components/navbars/AccordionUser";
import MenuUser from "~/components/navbars/MenuUser";

export default function AuthButton() {
	const { isLoggedIn, user } = useSelector((state) => state.auth);
	const userMenu = useBreakpointValue({
		base: <AccordionUser name={user?.name} />,
		md: <MenuUser name={user?.name} />,
	});
	const router = useRouter();

	const onClick = (route) => router.push(route);

	return (
		<Flex align="center" gap={2}>
			{!isLoggedIn ? (
				<Flex w="full" gap={2}>
					<Button colorScheme="brand.red" rounded="3xl" w="full" onClick={() => onClick("/login")}>
						Login
					</Button>
					<Button variant="ghost" colorScheme="brand.red" rounded="3xl" w="full" onClick={() => onClick("/register")}>
						Signup
					</Button>
				</Flex>
			) : (
				<Flex justify="space-between" align="center" w="full">
					{userMenu}
				</Flex>
			)}
		</Flex>
	);
}
