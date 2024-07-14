import { useState } from "react";
import ProfileNav from "../../components/ProfileNav";

function ProfilePaymentPage() {
	const mockCardData = {
		cardNumber: "1234567890123456",
		nameOnCard: "John Doe",
		expiryDate: "2024-12",
		cvv: "123",
		bank: "",
		accountHolderName: "",
		accountNumber: "",
	};

	const initialFormData = {
		cardNumber: mockCardData.cardNumber || "",
		nameOnCard: mockCardData.nameOnCard || "",
		expiryDate: mockCardData.expiryDate || "",
		cvv: mockCardData.cvv || "",
		bank: mockCardData.bank || "",
		accountHolderName: mockCardData.accountHolderName || "",
		accountNumber: mockCardData.accountNumber || "",
	};

	const [formData, setFormData] = useState(initialFormData);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
			alert("Form Submitted Successfully!");
		} else {
			alert("Form Submitted failed!");
		}
	};

	const validateForm = (data) => {
		const errors = {};
		const isCardDetailsFilled =
			data.cardNumber || data.nameOnCard || data.expiryDate || data.cvv;
		const isBankDetailsFilled =
			data.bank || data.accountHolderName || data.accountNumber;

		if (isCardDetailsFilled) {
			if (data.cardNumber.length !== 16) {
				errors.cardNumber = "Card number must be 16 Digits Long";
			}
			if (!data.nameOnCard.trim()) {
				errors.nameOnCard = "Card Holder Name is required";
			}
			if (!data.expiryDate) {
				errors.expiryDate = "Expiry Date is required";
			}
			if (data.cvv.length !== 3) {
				errors.cvv = "CVV number must be 3 Digits Long";
			}
		}
		if (isBankDetailsFilled) {
			if (!data.bank) {
				errors.bank = "Bank is required";
			}

			if (!data.accountHolderName) {
				errors.accountHolderName = "Account Holder name is required";
			}
			if (data.accountNumber.length !== 10) {
				errors.accountNumber = "Account number must be 10 Digits Long";
			}
		}
		return errors;
	};

	return (
		<section className="bg-white rounded-3xl w-full lg:w-3/5 xl:w-3/4 p-8 xl:py-10 xl:px-16">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col h-full gap-6 justify-between"
			>
				<div className="flex flex-col gap-6">
					<h2 className="text-left">Payment</h2>
					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full sm:w-1/2">
							Card number
							<input
								type="number"
								name="cardNumber"
								value={formData.cardNumber}
								onChange={handleInputChange}
								className="input mt-3"
							/>
							{errors.cardNumber && (
								<span className="text-red-500 text-sm mt-1">
									{errors.cardNumber}
								</span>
							)}
						</label>
						<label className="flex flex-col w-full sm:w-1/2">
							Name on card
							<input
								type="text"
								name="nameOnCard"
								value={formData.nameOnCard}
								onChange={handleInputChange}
								className="input mt-3"
							/>
							{errors.nameOnCard && (
								<span className="text-red-500 text-sm mt-1">
									{errors.nameOnCard}
								</span>
							)}
						</label>
					</div>

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full sm:w-1/2">
							Expiry Date
							<input
								type="month"
								name="expiryDate"
								value={formData.expiryDate}
								min="2018-01"
								max="2030-12"
								onChange={handleInputChange}
								className="input mt-3"
							/>
							{errors.expiryDate && (
								<span className="text-red-500 text-sm mt-1">
									{errors.expiryDate}
								</span>
							)}
						</label>
						<label className="flex flex-col w-full sm:w-1/2">
							CVV
							<input
								type="number"
								name="cvvNumber"
								value={formData.cvvNumber}
								onChange={handleInputChange}
								className="input mt-3"
							/>
							{errors.cvv && (
								<span className="text-red-500 text-sm mt-1">{errors.cvv}</span>
							)}
						</label>
					</div>
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
	);
}
export default ProfilePaymentPage;
