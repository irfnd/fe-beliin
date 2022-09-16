import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginCustomerSchema } from "~/helpers/validations";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "~/helpers/redux/slices/AuthSlice";
import AuthToast from "~/components/toasts/authToast";

// Styles, Icons
import { Flex, Text, Link, Button } from "@chakra-ui/react";

// Components, Images
import Input from "~/components/inputs/Input";

export default function LoginSellerForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { user } = useSelector((state) => state.auth);
	const router = useRouter();
	const dispatch = useDispatch();

	const formOptions = { resolver: yupResolver(LoginCustomerSchema) };
	const methods = useForm(formOptions);

	const { showToast: successToast } = AuthToast({
		title: "Login Successfully.",
		description: "You have successfully logged in as a seller.",
		status: "success",
		duration: 2000,
	});

	const { showToast: errorToast } = AuthToast({
		title: "Login Failed!",
		description: "You have entered the wrong email or password.",
		status: "error",
		duration: 2000,
	});

	const onSubmit = ({ email, password }) => {
		if (user) {
			setIsSubmitting(true);
			if (user.email === email && user.password === password && user.role === "seller") {
				dispatch(AuthActions.login());
				setTimeout(() => setIsSubmitting(false), 1000);
				setTimeout(() => successToast(), 1000);
				setTimeout(() => router.push("/"), 3000);
			} else {
				setTimeout(() => setIsSubmitting(false), 1000);
				setTimeout(() => errorToast(), 1000);
			}
		} else {
			router.push("/register");
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={6}>
					<Flex direction="column" gap={4}>
						<Input type="email" name="email" placeholder="Email" />
						<Input type="password" name="password" placeholder="Password" />
					</Flex>
					<Flex justify="end">
						<Link
							fontWeight="semibold"
							fontSize={14}
							color="brand.red.500"
							onClick={() => router.push("/forgot-password")}
						>
							Forgot password?
						</Link>
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
						LOG IN
					</Button>
					<Text textAlign="center" w="full" fontSize={14}>
						Already have a Beli.in account?
						<Link color="brand.red.500" fontWeight="semibold" ml={1} onClick={() => router.push("/register")}>
							Register
						</Link>
					</Text>
				</Flex>
			</form>
		</FormProvider>
	);
}
