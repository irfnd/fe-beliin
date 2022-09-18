// Styles, Icons
import {
	Flex,
	Box,
	Divider,
	Spacer,
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

export default function FilterModal(props) {
	const { isOpen, onClose } = props;

	return (
		<Modal size="lg" isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader display="flex" alignItems="center" shadow="md" mb={3} gap={2}>
					<Text fontSize={22}>Filter</Text>
					<Spacer />
					<IconButton variant="ghost" color="brand.gray.800" icon={<BiX size={36} />} onClick={onClose} />
				</ModalHeader>
				<ModalBody display="flex" flexDirection="column">
					<Flex direction="column" gap={6}>
						<Text color="brand.gray.800" fontSize={16} fontWeight="semibold">
							Colors
						</Text>
						<Box bg="black" rounded="full" boxSize={10} />
					</Flex>
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
