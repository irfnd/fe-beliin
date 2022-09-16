// Components, Images
import AuthLayout from "~/components/layouts/AuthLayout";
import AuthLogo from "~/components/pages/auth/AuthLogo";
import AuthHeaderText from "~/components/pages/auth/AuthHeaderText";
import TabMenuRole from "~/components/pages/auth/TabMenuRole";

export default function Login() {
	return (
		<AuthLayout title="Login">
			<AuthLogo />
			<AuthHeaderText text="Please login with your account" />
			<TabMenuRole page="login" />
		</AuthLayout>
	);
}
