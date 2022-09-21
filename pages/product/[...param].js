// Styles, Icons
import { Flex } from "@chakra-ui/react";

// Components, Images
import FullLayout from "~/components/layouts/FullLayout";
import CustomContainer from "~/components/layouts/CustomContainer";
import ProductBreadcrumb from "~/components/breadcrumbs/ProductBreadcrumb";
import ProductDetail from "~/components/pages/product/ProductDetail";

export default function Product() {
	return (
		<FullLayout title="Home - Beli.in">
			<CustomContainer>
				<Flex direction="column" gap={12} my={140}>
					<ProductBreadcrumb category={{ text: "Shoes", url: "/" }} />
					<ProductDetail />
				</Flex>
			</CustomContainer>
		</FullLayout>
	);
}
