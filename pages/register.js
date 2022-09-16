// Components, Images
import AuthLayout from "~/components/layouts/AuthLayout";
import AuthLogo from "~/components/pages/auth/AuthLogo";
import AuthHeaderText from "~/components/pages/auth/AuthHeaderText";
import TabMenuRole from "~/components/pages/auth/TabMenuRole";

export default function Register() {
	return (
		<AuthLayout title="Register - Beli.in">
			<AuthLogo />
			<AuthHeaderText text="Please sign up with your account" />
			<TabMenuRole page="register" />
		</AuthLayout>
	);
}
