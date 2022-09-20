import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AuthActions } from "~/helpers/redux/slices/AuthSlice";

// Styles, Icons
import { Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiUser, BiLogOut } from "react-icons/bi";

export default function MenuUser(props) {
	const { name } = props;
	const router = useRouter();
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(AuthActions.logout());
		router.push("/register");
	};

	return (
		<>
			<Text display={{ base: "block", md: "none" }} color="brand.gray.800">
				{name}
			</Text>
			<Menu>
				<MenuButton>
					<Avatar size="sm" />
				</MenuButton>
				<MenuList mt={5}>
					<MenuItem icon={<BiUser size={18} />} color="brand.gray.800">
						Profile
					</MenuItem>
					<MenuItem icon={<BiLogOut size={18} />} color="brand.gray.800" onClick={onLogout}>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}
