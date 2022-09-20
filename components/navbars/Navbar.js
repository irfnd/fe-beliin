// Styles, Icons
import { Flex, Spacer } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Components, Images
import CustomContainer from "~/components/layouts/CustomContainer";
import BrandLogo from "~/components/navbars/BrandLogo";
import SearchBar from "~/components/navbars/SearchBar";
import ShoppingChart from "~/components/navbars/ShoppingChart";
import AuthButton from "~/components/navbars/AuthButton";
import NavbarMobile from "~/components/navbars/NavbarMobile";

export default function Navbar() {
	const searchBarResp = useBreakpointValue({ base: null, md: <SearchBar /> });
	const authButtonResp = useBreakpointValue({ base: null, md: <AuthButton /> });
	const spacerResp = useBreakpointValue({ base: null, md: <Spacer /> });

	return (
		<CustomContainer w="full" position="fixed" zIndex={10} top={0} py={5} bg="white" boxShadow="xl">
			<Flex align="center">
				<BrandLogo />
				<Spacer />
				{searchBarResp}
				{spacerResp}
				<ShoppingChart />
				{authButtonResp}
				<NavbarMobile />
			</Flex>
		</CustomContainer>
	);
}
