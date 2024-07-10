const format = {
	thCurrency(price) {
		const thPrice = new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(price);
		return thPrice;
	},
};

export default format;
