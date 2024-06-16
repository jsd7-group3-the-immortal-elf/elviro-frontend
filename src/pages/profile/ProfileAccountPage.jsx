import { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ProfileAccountPage() {
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
		newPassword: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const respones = await axios.get(
					"https://65f455dcf54db27bc0217060.mockapi.io/todos/3"
				);
				setFormData({
					userName: respones.data.userName,
					email: respones.data.email,
					password: respones.data.password,
					newPassword: "",
				});
			} catch (error) {
				console.error("Error fetching Data: ", error);
			}
		};
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormdata) => ({
			...prevFormdata,
			[name]: value,
		}));
	};

	const [passwordVisible, setPasswordVisble] = useState(false);
	const [errors, setErrors] = useState({});

	const togglePasswordVisible = () => {
		setPasswordVisble(!passwordVisible);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validationForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const updateFormData = { ...formData };
			if (formData.newPassword) {
				updateFormData.password = formData.newPassword;
			}
			try {
				const response = await axios.put(
					"https://65f455dcf54db27bc0217060.mockapi.io/todos/3",
					updateFormData
				);
				console.log(response);
				alert("Form Sumbit Successful!");
				const freshData = await axios.get(
					"https://65f455dcf54db27bc0217060.mockapi.io/todos/3"
				);
				setFormData({
					userName: freshData.data.userName,
					email: freshData.data.email,
					password: freshData.data.password,
					newPassword: "",
				});
			} catch (error) {
				alert(`Form Submit Faied: ${error}`);
			}
		} else {
			const errorMessages = Object.values(newErrors).join("\n");
			alert(`Form Submit Failed:\n${errorMessages}`);
		}
	};
	const validationForm = (data) => {
		const errors = {};

		if (!data.userName.trim()) {
			errors.userName = "Name on Card required";
		}
		if (!data.email.trim()) {
			errors.email = "Email required";
		} else if (!/\S+@\S+\.\S+/.test(data.email)) {
			errors.email = "Email is invalid";
		}
		if (!data.password) {
			errors.password = "Password is required";
		} else if (data.password.length < 8) {
			errors.password = "Must be at least 8 characters long";
		}
		if (data.newPassword && data.newPassword.length < 8) {
			errors.newPassword = "New Password must be at least 8 characters long";
		}
		return errors;
	};

	// 	try {
	// 		await axios.put("https://65f455dcf54db27bc0217060.mockapi.io/todos/2", {
	// 			...formData,
	// 			password: formData.newPassword,
	// 		});
	// 		alert("Password update!");

	// 		setIsPasswordUpdated(true);
	// 	} catch (error) {
	// 		console.error("Error updating password: ", error);
	// 	}
	// };

	return (
		<div className="px-8">
			<section className="py-10 xl:py-10 xl:px-16">
				<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
					{/*-- personal info --*/}
					<h2 className="text-left">Account</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							User Name
							<input
								type="text"
								name="userName"
								value={formData.userName}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.userName.length < 5 && (
								<p className="text-red-500">{errors.userName}</p>
							)}
						</label>
						<label className="flex flex-col w-full">
							Email
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
							{formData.email && <p className="text-red-500">{errors.email}</p>}
						</label>
					</div>
					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full relative">
							Password
							<input
								type={passwordVisible ? "text" : "password"}
								name="password"
								value={formData.password}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg pr-16"
								required
							/>
							<button
								type="button"
								onClick={togglePasswordVisible}
								className="absolute inset-y-0 right-0 top-auto flex items-center px-3 py-3"
							>
								{passwordVisible ? (
									<FaEyeSlash size={24} />
								) : (
									<FaEye size={24} />
								)}
							</button>
						</label>
						<label className="flex flex-col w-full">
							Change password
							<input
								type="password"
								name="newPassword"
								value={formData.newPassword}
								onChange={handleInputChange}
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
							/>
							{errors.newPassword && (
								<p className="text-red-500">{errors.newPassword}</p>
							)}
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
export default ProfileAccountPage;
