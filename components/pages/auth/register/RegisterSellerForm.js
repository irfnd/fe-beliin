import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Styles, Icons
import { Flex, Text, Link, Button } from "@chakra-ui/react";

// Components, Images
import Input from "~/components/inputs/Input";

export default function RegisterSellerForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const formOptions = {};
	const methods = useForm(formOptions);

	const onSubmit = (data) => {
		setIsSubmitting(true);
		setTimeout(() => {
			console.log(data);
			setIsSubmitting(false);
		}, 3000);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex direction="column" gap={8}>
					<Flex direction="column" gap={4}>
						<Input name="name" placeholder="Name" />
						<Input type="email" name="email" placeholder="Email" />
						<Input name="phone" placeholder="Phone Number" />
						<Input name="store" placeholder="Store Name" />
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
