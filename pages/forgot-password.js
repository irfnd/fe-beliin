import { useState } from "react";

// Components, Images
import AuthLayout from "~/components/layouts/AuthLayout";
import AuthLogo from "~/components/pages/auth/AuthLogo";
import AuthHeaderText from "~/components/pages/auth/AuthHeaderText";
import EmailResetForm from "~/components/pages/auth/forgotPassword/EmailResetForm";

export default function ForgotPassword() {
	const [info, setInfo] = useState(null);

	return (
		<AuthLayout title="Forgot Password">
			<AuthLogo />
			<AuthHeaderText text="Forgot password" info={info} />
			<EmailResetForm {...{ setInfo }} />
		</AuthLayout>
	);
}
