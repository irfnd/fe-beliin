import { useFormContext } from "react-hook-form";

// Styles, Icons
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

export default function InputEmail(props) {
	const { name, placeholder } = props;
	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<FormControl display="flex" flexDirection="column" gap={2} isInvalid={errors[name]}>
			<Input
				type="email"
				placeholder={placeholder}
				_placeholder={{ color: "brand.gray.300", fontWeight: "medium" }}
				fontSize={14}
				bg="white"
				fontWeight="medium"
				color="brand.gray.800"
				borderColor="brand.gray.300"
				focusBorderColor={!errors[name] ? "brand.softRed.400" : "brand.red.500"}
				_hover={{ borderColor: "brand.gray.500" }}
				p={7}
				{...register(name)}
			/>
			{errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
