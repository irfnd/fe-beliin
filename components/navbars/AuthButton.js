// Styles, Icons
import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function AuthButton(props) {
	const { isLoggedIn, user } = useSelector((state) => state.auth);

	return (
		<Flex align="center" gap={2}>
			{!isLoggedIn ? (
				<Flex w={{ base: "full", md: "25%", lg: "17%" }}>
					<Button colorScheme="brand.red" size={{ base: "md", md: "sm" }} rounded="3xl" w="full">
						Login
					</Button>
					<Button variant="ghost" colorScheme="brand.red" size={{ base: "md", md: "sm" }} rounded="3xl" w="full">
						Signup
					</Button>
				</Flex>
			) : (
				<Flex justify="space-between" align="center" w="full">
					<Text display={{ base: "block", md: "none" }}>{user.name}</Text>
					<Avatar size="sm" src="https://bit.ly/dan-abramov" />
				</Flex>
			)}
		</Flex>
	);
}
