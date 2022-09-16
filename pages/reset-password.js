// Components, Images
import AuthLayout from "~/components/layouts/AuthLayout";
import AuthLogo from "~/components/pages/auth/AuthLogo";
import AuthHeaderText from "~/components/pages/auth/AuthHeaderText";
import ResetPasswordForm from "~/components/pages/auth/forgotPassword/ResetPasswordForm";

export default function ResetPassword() {
	return (
		<AuthLayout title="Reset Password - Beli.in">
			<AuthLogo />
			<AuthHeaderText text="Reset password" />
			<ResetPasswordForm />
		</AuthLayout>
	);
}
