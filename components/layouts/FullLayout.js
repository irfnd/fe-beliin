import Head from "next/head";

// Components, Images
import Navbar from "~/components/navbars/Navbar";

export default function FullLayout(props) {
	const { title, children } = props;

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<Navbar />
				{children}
			</main>
		</div>
	);
}
