// Styles, Icons
import { Flex, Text } from "@chakra-ui/react";

// Components, Images
import FullLayout from "~/components/layouts/FullLayout";
import CustomContainer from "~/components/layouts/CustomContainer";

export default function Home() {
	return (
		<FullLayout title="Home - Beli.in">
			<CustomContainer>
				<Text>Home page</Text>
			</CustomContainer>
		</FullLayout>
	);
}
