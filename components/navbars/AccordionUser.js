import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AuthActions } from "~/helpers/redux/slices/AuthSlice";

// Styles, Icons
import { Flex, Text, Avatar, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { BiUser, BiLogOut } from "react-icons/bi";

export default function AccordionUser(props) {
	const { name } = props;
	const router = useRouter();
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(AuthActions.logout());
		router.push("/register");
	};

	return (
		<Accordion w="full" allowToggle>
			<AccordionItem>
				<AccordionButton py={4} px={0} _hover={{ bg: "white" }}>
					<Flex w="full" align="center" justify="space-between">
						<Text display={{ base: "block", md: "none" }} color="brand.gray.800">
							{name}
						</Text>
						<Avatar size="sm" />
					</Flex>
				</AccordionButton>
				<AccordionPanel pt={4} pb={6} px={0}>
					<Flex direction="column" gap={8}>
						<Flex justify="space-between" align="center" cursor="pointer">
							<Text fontWeight="semibold">Profile</Text>
							<Icon as={BiUser} fontSize={24} color="brand.gray.400" />
						</Flex>
						<Flex justify="space-between" align="center" cursor="pointer" onClick={onLogout}>
							<Text fontWeight="semibold">Logout</Text>
							<Icon as={BiLogOut} fontSize={24} color="brand.gray.400" />
						</Flex>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}
