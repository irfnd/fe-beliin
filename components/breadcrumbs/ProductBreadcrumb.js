// Styles, Icons
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

// Components, Images

export default function ProductBreadcrumb(props) {
	const { category } = props;

	return (
		<Breadcrumb spacing={2} color="brand.gray.400" separator={<BiChevronRight size={22} />}>
			<BreadcrumbItem>
				<BreadcrumbLink color="brand.gray.400">Home</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink color="brand.gray.400">Category</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink color="brand.gray.400">{category.text}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}
