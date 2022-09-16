// Components, Images
import InputText from "~/components/inputs/InputText";
import InputEmail from "~/components/inputs/InputEmail";
import InputPassword from "~/components/inputs/InputPassword";

export default function Input(props) {
	const { type, name, placeholder } = props;

	switch (type) {
		case "email":
			return <InputEmail name={name} placeholder={placeholder} />;
		case "password":
			return <InputPassword name={name} placeholder={placeholder} />;
		default:
			return <InputText name={name} placeholder={placeholder} />;
	}
}
