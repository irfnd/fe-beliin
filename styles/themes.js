import { extendTheme } from "@chakra-ui/react";
import { colors, fonts, fontWeights } from "~/styles/foundations";

const themes = extendTheme({
	colors,
	fonts,
	fontWeights,
});

export default themes;
