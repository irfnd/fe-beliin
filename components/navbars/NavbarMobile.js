import { useSelector } from "react-redux";

// Styles, Icons
import {
	Box,
	Stack,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerCloseButton,
	DrawerOverlay,
	Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components, Images
import SearchBar from "~/components/navbars/SearchBar";
import AuthButton from "~/components/navbars/AuthButton";
import NavbarMobileMenu from "~/components/navbars/NavbarMobileMenu";

export default function NavbarMobile() {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box display={{ base: "flex", md: "none" }} boxSize={10}>
			<Button variant="link" onClick={onOpen} color="purple.900">
				<HamburgerIcon h={8} w={8} />
			</Button>
			<Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose} blockScrollOnMount={false}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody display="flex" justifyContent="center" py={16}>
						<Stack spacing={8} h="full" w="90%">
							<SearchBar />
							{isLoggedIn && <NavbarMobileMenu />}
							<AuthButton />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
