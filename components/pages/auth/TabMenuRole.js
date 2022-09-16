// Styles, Icons
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Components, Images
import RegisterCustomerForm from "~/components/pages/auth/register/RegisterCustomerForm";
import RegisterSellerForm from "~/components/pages/auth/register/RegisterSellerForm";
import LoginCustomerForm from "~/components/pages/auth/login/LoginCustomerForm";
import LoginSellerForm from "~/components/pages/auth/login/LoginSellerForm";

export default function TabMenuRole(props) {
	const { page } = props;

	return (
		<Flex w={{ base: "full", sm: "75%", md: "65%", lg: "55%", xl: "35%" }} justify="center">
			<Tabs variant="unstyled" w="full">
				<TabList display="flex" justifyContent="center" fontSize={14}>
					<Tab
						color="brand.gray.300"
						borderWidth={1}
						borderColor="brand.gray.300"
						_selected={{ color: "white", bg: "brand.red.500", borderColor: "brand.red.500" }}
						roundedTopLeft="md"
						roundedBottomLeft="md"
						w="130px"
						py={3}
					>
						Customer
					</Tab>
					<Tab
						color="brand.gray.300"
						borderWidth={1}
						borderColor="brand.gray.300"
						_selected={{ color: "white", bg: "brand.red.500", borderColor: "brand.red.500" }}
						roundedTopRight="md"
						roundedBottomRight="md"
						w="130px"
						py={3}
					>
						Seller
					</Tab>
				</TabList>
				<TabPanels mt={6}>
					<TabPanel>{page === "register" ? <RegisterCustomerForm /> : <LoginCustomerForm />}</TabPanel>
					<TabPanel>{page === "register" ? <RegisterSellerForm /> : <LoginSellerForm />}</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
