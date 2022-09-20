// Styles, Icons
import { Flex } from "@chakra-ui/react";

// Components, Images
import FullLayout from "~/components/layouts/FullLayout";
import CustomContainer from "~/components/layouts/CustomContainer";
import Promotion from "~/components/pages/home/Promotion";
import Category from "~/components/pages/home/Category";
import New from "~/components/pages/home/New";
import Popular from "~/components/pages/home/Popular";

export default function Home() {
	return (
		<FullLayout title="Home - Beli.in">
			<CustomContainer>
				<Flex direction="column" gap={12} my={140}>
					<Promotion />
					<Category />
					<New />
					<Popular />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
