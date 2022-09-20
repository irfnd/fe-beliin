export default function useCurrency(number) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 1,
	});
	const currency = formatter.format(number).split("");
	currency.splice(1, 0, " ");

	return currency.join("");
}
