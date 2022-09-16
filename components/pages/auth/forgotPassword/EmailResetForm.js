import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Styles, Icons
import { Flex, Text, Link, Button } from "@chakra-ui/react";

// Components, Images
import Input from "~/components/inputs/Input";

export default function EmailResetForm(props) {
	const { setInfo } = props;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const formOptions = {};
	const methods = useForm(formOptions);

	const onSubmit = (data) => {
		setIsSubmitting(true);
		setTimeout(() => {
			console.log(data);
			setInfo("We have sent an email containing a password reset instruction to your email. please check your email.");
			setIsSubmitting(false);
			setTimeout(() => router.push("/reset-password"), 3000);
		}, 3000);
	};

	return (
		<Flex w={{ base: "full", sm: "75%", md: "65%", lg: "55%", xl: "35%" }} justify="center" px={{ base: 4, sm: 0 }}>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					style={{ display: "flex", flexDirection: "column", width: "100%" }}
				>
					<Flex direction="column" gap={8}>
						<Flex direction="column" gap={4}>
							<Input type="email" name="email" placeholder="Email" />
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
							RESET PASSWORD
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
		</Flex>
	);
}
