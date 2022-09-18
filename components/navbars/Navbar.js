// Styles, Icons
import { Flex, Spacer } from "@chakra-ui/react";

// Components, Images
import CustomContainer from "~/components/layouts/CustomContainer";
import BrandLogo from "~/components/navbars/BrandLogo";
import SearchBar from "~/components/navbars/SearchBar";

export default function Navbar() {
	return (
		<CustomContainer w="full" position="fixed" zIndex={10} top={0} py={5} bg="white" boxShadow="xl">
			<Flex align="center">
				<BrandLogo />
				<Spacer />
				<SearchBar />
				<Spacer />
				{/* <HStack display={{ base: "none", md: "flex" }}>{user.data ? <UserAvatar /> : <AuthButton />}</HStack> */}
			</Flex>
		</CustomContainer>
	);
}
