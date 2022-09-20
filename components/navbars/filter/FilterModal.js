// Styles, Icons
import {
	Spacer,
	Divider,
	Text,
	Button,
	IconButton,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
} from "@chakra-ui/react";
import { BiX } from "react-icons/bi";

// Components, Images
import FilterColor from "~/components/navbars/filter/FilterColor";
import FilterSize from "~/components/navbars/filter/FilterSize";
import FilterCategory from "~/components/navbars/filter/FilterCategory";
import FilterBrand from "~/components/navbars/filter/FilterBrand";

export default function FilterModal(props) {
	const { isOpen, onClose } = props;

	return (
		<Modal size="md" isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader display="flex" alignItems="center" shadow="md" mb={3} gap={2}>
					<Text fontSize={22}>Filter</Text>
					<Spacer />
					<IconButton variant="ghost" color="brand.gray.800" icon={<BiX size={36} />} onClick={onClose} />
				</ModalHeader>
				<ModalBody display="flex" flexDirection="column" gap={6} mb={4}>
					<FilterColor />
					<Divider border="2px" />
					<FilterSize />
					<Divider border="2px" />
					<FilterCategory />
					<Divider border="2px" />
					<FilterBrand />
				</ModalBody>
				<ModalFooter display="flex" justifyContent="center" gap={2}>
					<Button variant="ghost" colorScheme="brand.red" onClick={onClose} w="full">
						Discard
					</Button>
					<Button colorScheme="brand.red" onClick={onClose} w="full">
						Apply
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
