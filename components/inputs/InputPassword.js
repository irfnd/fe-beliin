import { useState } from "react";
import { useFormContext } from "react-hook-form";

// Styles, Icons
import { Input, InputGroup, InputRightElement, FormControl, FormErrorMessage, Icon, Button } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";

export default function InputPassword(props) {
	const { name, placeholder } = props;
	const [showPass, setShowPass] = useState(false);
	const [inputFocus, setInputFocus] = useState(false);
	const [inputHover, setInputHover] = useState(false);
	const { register, formState } = useFormContext();
	const { onChange, name: formName, ref } = register(name);
	const { errors } = formState;

	const iconColor = (inputFocus && "brand.softRed.400") || (inputHover && "brand.gray.500") || "brand.gray.300";

	return (
		<FormControl display="flex" flexDirection="column" gap={1} isInvalid={errors[name]}>
			<InputGroup>
				<Input
					name={formName}
					type={showPass ? "text" : "password"}
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
					pr={14}
					onFocus={() => setInputFocus(!inputFocus)}
					onBlur={() => setInputFocus(!inputFocus)}
					onMouseOver={() => setInputHover(!inputHover)}
					onMouseLeave={() => setInputHover(!inputHover)}
					onChange={onChange}
					ref={ref}
				/>
				<InputRightElement display="flex" justifyContent="center" alignItems="center" p={7} h="full">
					<Button
						type="button"
						variant="ghost"
						color={errors[name] ? "brand.red.500" : iconColor}
						_hover={{ color: errors[name] ? "brand.red.500" : "brand.softRed.400" }}
						onClick={() => setShowPass(!showPass)}
					>
						<Icon as={showPass ? BiHide : BiShow} boxSize={7} />
					</Button>
				</InputRightElement>
			</InputGroup>
			{errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
