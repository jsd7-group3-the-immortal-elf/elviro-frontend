export function thCurrency(price) {
	const thPrice = new Intl.NumberFormat("th-TH", {
		style: "currency",
		currency: "THB",
	}).format(price);
	return thPrice;
}

export function thDateTime(createOn) {
	const isoDate = new Date(createOn);
	const thDate = isoDate.toLocaleString("th-TH", { timeZone: "+07" });
	return thDate;
}

export function numberWithCommas(number) {
	if (number == null) {
		return "";
	}
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
