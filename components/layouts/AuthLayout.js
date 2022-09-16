import Head from "next/head";

// Styles, Icons
import { Flex } from "@chakra-ui/react";

export default function AuthLayout(props) {
	const { title, children } = props;

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<Flex direction="column" align="center" justify="center" minH="100vh" gap={8} py={20}>
					{children}
				</Flex>
			</main>
		</div>
	);
}
