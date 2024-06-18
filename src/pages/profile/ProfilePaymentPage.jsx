import { useState } from "react";

function ProfilePaymentPage() {
	const mockCardData = {
		cardNumber: "1234567890123456",
		nameOnCard: "John Doe",
		expiryDate: "",
		cvvNumber: "123",
	};

	const mockBankData = {
		bank: "",
		accountHolderName: "John Doe",
		accountNumber: "1234567890",
	};

	const [formData, setFormData] = useState({
		...mockCardData,
		...mockBankData,
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const hadleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validationForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			alert("Form Sumbit Successful!");
		} else {
			const errorMessages = Object.values(newErrors).join("\n");
			alert(`Form Submit Failed:\n${errorMessages}`);
		}
	};

	const validationForm = (data) => {
		const errors = {};

		if (!data.cardNumber) {
			errors.cardNumber = "Card Number required";
		} else if (data.cardNumber.length !== 16) {
			errors.cardNumber = "Card number must be 16 digits.";
		}
		if (!data.nameOnCard.trim()) {
			errors.nameOnCard = "Name on Card required";
		} else if (data.nameOnCard.length < 5) {
			errors.nameOnCard = "Must be at least 5 characters long";
		}
		if (!data.cvvNumber) {
			errors.cvvNumber = "CVV Number required";
		} else if (data.cvvNumber.length !== 3) {
			errors.cvvNumber = "Card number must be 3 digits.";
		}
		if (!data.accountHolderName.trim()) {
			errors.accountHolderName = "Account Holder Name required";
		} else if (data.accountHolderName.length < 5) {
			errors.accountHolderName = "Must be at least 5 characters long";
		}
		if (!data.accountNumber) {
			errors.accountNumber = "Account Number required";
		} else if (data.accountNumber.length !== 10) {
			errors.accountNumber = "Card number must be 10 digits.";
		}
		return errors;
	};

	return (
		<div className="px-8">
			<section className="py-10 xl:py-10 xl:px-16">
				<form onSubmit={hadleSubmit} className="flex flex-col gap-6">
					{/*-- personal info --*/}
					<h2 className="text-left">Payment</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<h3 className="text-left">Card Detail</h3>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Card number
							<input
								type="number"
								name="cardNumber"
								value={formData.cardNumber}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.cardNumber.length !== 16 && (
								<p className="text-red-500">{errors.cardNumber}</p>
							)}
						</label>
						<label className="flex flex-col w-full">
							Name on card
							<input
								type="text"
								name="nameOnCard"
								value={formData.nameOnCard}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>
					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Expiry Date
							<input
								type="month"
								name="expiryDate"
								value={formData.expiryDate}
								min="2018-01"
								max="2030-12"
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							CVV
							<input
								type="number"
								name="cvvNumber"
								value={formData.cvvNumber}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.cvvNumber.length !== 3 && (
								<p className="text-red-500">{errors.cvvNumber}</p>
							)}
						</label>
					</div>

					<div className="flex flex-col sm:w-1/2 sm:pr-4">card logo</div>

					{/*!-- address -->*/}
					<h2 className="text-left mt-8">Bank Account</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Bank
							<select className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg">
								<option value="banka">Select Bank</option>
								<option value="banka">Bank A</option>
								<option value="bankb">Bank B</option>
								<option value="bankc">Bank C</option>
							</select>
						</label>
						<label className="flex flex-col w-full">
							Account Holder Name
							<input
								type="text"
								name="accountHolderName"
								value={formData.accountHolderName}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.accountHolderName.length < 5 && (
								<p className="text-red-500">{errors.accountHolderName}</p>
							)}
						</label>
						<label className="flex flex-col w-full">
							Account Number
							<input
								type="number"
								name="accountNumber"
								value={formData.accountNumber}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.accountNumber.length !== 10 && (
								<p className="text-red-500">{errors.accountNumber}</p>
							)}
						</label>
					</div>

					<button
						type="submit"
						className={
							"py-4 px-6 rounded-xl mx-auto bg-orange-200 hover:bg-orange-300"
						}
					>
						Save Change
					</button>
				</form>
			</section>
		</div>
	);
}
export default ProfilePaymentPage;
