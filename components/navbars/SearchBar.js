// Styles, Icons
import { IconButton, Icon, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { BiSearch, BiFilterAlt } from "react-icons/bi";

// Components, Images
import FilterModal from "~/components/navbars/FilterModal";

export default function SearchBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<InputGroup w="50%">
				<Input
					type="text"
					placeholder="Search"
					_placeholder={{ color: "brand.gray.400", fontWeight: "medium" }}
					fontSize={14}
					bg="white"
					fontWeight="medium"
					color="brand.gray.800"
					borderColor="brand.gray.300"
					focusBorderColor="brand.softRed.400"
					rounded="3xl"
					_hover={{ borderColor: "brand.gray.500" }}
					px={5}
					pr={14}
				/>
				<InputRightElement mr={3} color="brand.gray.400">
					<Icon as={BiSearch} fontSize={24} />
				</InputRightElement>
			</InputGroup>
			<IconButton
				bg="white"
				color="brand.gray.400"
				borderWidth={1}
				borderColor="brand.gray.300"
				rounded="xl"
				icon={<BiFilterAlt size={20} />}
				onClick={onOpen}
				ml={2}
			/>
			<FilterModal {...{ isOpen, onClose }} />
		</>
	);
}
