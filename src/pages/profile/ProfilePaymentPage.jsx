import { object } from "prop-types";
import { useState } from "react";

function ProfilePaymentPage() {
	const mockData = {
		cardNumber: "1234567890123456",
		nameOnCard: "John Doe",
		expiryDate: "2024-12",
		cvv: "123",
		bank: "bankb",
		accountHolderName: "John Doe",
		accountNumber: "1234567890",
	};

	const [formData, setFormData] = useState(mockData);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormdata) => ({
			...prevFormdata,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);
		if (object.keys(newErrors).length === 0) {
			alert("Form Submitted Successfully!");
		} else {
			alert("Form Submitted failed!");
		}
	};

	const validateForm = (data) => {
		const errors = {};
		if (!data.cardNumber) {
			errors.cardNumber = "Card number is required";
		} else if (data.cardNumber.length < 16) {
			errors.cardNumber = "Card number must be 16 Digits Long";
		}
		if (!data.nameOnCard.trim()) {
			errors.nameOnCard = "Card Holder Name is required";
		}
		if (!data.expiryDate) {
			errors.expiryDate = "Expiry Date is required";
		}
		if (!data.cvv) {
			errors.cvv = "CVV number is required";
		} else if (data.cvv.length < 3) {
			errors.cvv = "CVV number must be 3 Digits Long";
		}
		return errors;
	};
	return (
		<div className="px-8">
			<section className="py-10 xl:py-10 xl:px-16">
				<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
							/>
							{errors.cardNumber && (
								<span className="text-red-500 text-sm mt-1">
									{errors.cardNumber}
								</span>
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
							/>
							{errors.nameOnCard && (
								<span className="text-red-500 text-sm mt-1">
									{errors.nameOnCard}
								</span>
							)}
						</label>
					</div>
					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Expiry Date
							<input
								type="month"
								name="expiryDate"
								value={formData.expiryDate}
								onChange={handleInputChange}
								min={"2018-01"}
								max={"2030-12"}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
							/>
							{errors.expiryDate && (
								<span className="text-red-500 text-sm mt-1">
									{errors.expiryDate}
								</span>
							)}
						</label>
						<label className="flex flex-col w-full">
							CVV
							<input
								type="number"
								name="cvv"
								value={formData.cvv}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
							/>
							{errors.cvv && (
								<span className="text-red-500 text-sm mt-1">{errors.cvv}</span>
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
								<option>Select Bank</option>
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
							/>
						</label>
					</div>

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-1/2">
							Account Number
							<input
								type="number"
								name="accountNumber"
								value={formData.accountNumber}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
							/>
						</label>
					</div>

					<button
						type="submit"
						className="py-4 px-6 rounded-xl bg-orange-200 hover:bg-orange-300 mx-auto"
					>
						Save Change
					</button>
				</form>
			</section>
		</div>
	);
}
export default ProfilePaymentPage;
