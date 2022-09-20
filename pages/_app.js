// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "~/helpers/redux/store";

// Styles
import { ChakraProvider } from "@chakra-ui/react";
import themes from "~/styles/themes";

// Fonts
import "@fontsource/metropolis/100.css";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/300.css";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/600.css";
import "@fontsource/metropolis/700.css";
import "@fontsource/metropolis/800.css";
import "@fontsource/metropolis/900.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={themes}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</ChakraProvider>
	);
}
