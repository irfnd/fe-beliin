import Head from "next/head";

// Styles, Icons
import { Flex } from "@chakra-ui/react";

export default function AuthLayout(props) {
	const { title, children } = props;

	return (
		<div>
			<Head>
				<title>{title} - Beli.in</title>
			</Head>

			<Flex direction="column" align="center" justify="center" minH="100vh" gap={8} py={20}>
				{children}
			</Flex>
		</div>
	);
}
