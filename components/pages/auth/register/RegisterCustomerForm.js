import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterCustomerSchema } from "~/helpers/validations";
import { useDispatch } from "react-redux";
import { AuthActions } from "~/helpers/redux/slices/AuthSlice";
import AuthToast from "~/components/toasts/authToast";

// Styles, Icons
import { Flex, Text, Link, Button } from "@chakra-ui/react";

// Components, Images
import Input from "~/components/inputs/Input";

export default function RegisterCustomerForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const dispatch = useDispatch();

	const formOptions = { resolver: yupResolver(RegisterCustomerSchema) };
	const methods = useForm(formOptions);

	const { showToast: successToast } = AuthToast({
		title: "Register Successfully.",
		description: "You have successfully registered as a customer.",
		status: "success",
		duration: 2000,
	});

	const onSubmit = ({ name, email, phone, password }) => {
		setIsSubmitting(true);
		const data = { name, email, phone, password, role: "customer" };
		dispatch(AuthActions.register(data));
		setTimeout(() => setIsSubmitting(false), 1000);
		setTimeout(() => successToast(), 1000);
		setTimeout(() => router.push("/login"), 3000);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={8}>
					<Flex direction="column" gap={4}>
						<Input name="name" placeholder="Name" />
						<Input type="email" name="email" placeholder="Email" />
						<Input name="phone" placeholder="Phone Number" />
						<Input type="password" name="password" placeholder="Password" />
					</Flex>
					<Button
						type="submit"
						isLoading={isSubmitting}
						colorScheme="brand.red"
						fontSize={14}
						fontWeight="medium"
						py={7}
						rounded="3xl"
					>
						SIGN UP
					</Button>
					<Text textAlign="center" w="full" fontSize={14}>
						Already have a Beli.in account?
						<Link color="brand.red.500" fontWeight="semibold" ml={1} onClick={() => router.push("/login")}>
							Login
						</Link>
					</Text>
				</Flex>
			</form>
		</FormProvider>
	);
}
