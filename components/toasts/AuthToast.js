// Styles, Icons
import { useToast } from "@chakra-ui/react";

export default function AuthToast(props) {
	const { title, description, status, duration } = props;
	const toast = useToast();

	const showToast = () =>
		toast({
			title,
			description,
			status,
			duration,
			variant: "left-accent",
			position: "top",
		});

	return { showToast };
}
