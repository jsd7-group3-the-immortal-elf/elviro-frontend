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

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [errors, setErrors] = useState({});

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://65f455dcf54db27bc0217060.mockapi.io/todos/3"
			);
			setFormData({
				userName: response.data.userName,
				email: response.data.email,
				password: response.data.password,
				newPassword: "",
			});
		} catch (error) {
			console.error("Error fetching Data: ", error);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormdata) => ({
			...prevFormdata,
			[name]: value,
		}));
	};

	const togglePasswordVisible = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
			try {
				await axios.put("https://65f455dcf54db27bc0217060.mockapi.io/todos/2", {
					userName: formData.userName,
					email: formData.email,
				});
				alert("Form Submitted Successfully!");

				if (formData.newPassword.trim() !== "") {
					handleChangePassword();
				}
			} catch (error) {
				console.error("Error updating Profile: ", error);
				alert("Profile update failed!");
			}
		} else {
			alert("Form Submitted failed!");
		}
	};

	const handleChangePassword = async () => {
		try {
			if (formData.newPassword.length < 8) {
				setErrors((prevErrors) => ({
					...prevErrors,
					newPassword: "New password must be a least 8 charecters long",
				}));
				return;
			}
			await axios.put("https://65f455dcf54db27bc0217060.mockapi.io/todos/2", {
				password: formData.newPassword,
			});
			alert("Password updated");
			setFormData((prevFormData) => ({
				...prevFormData,
				password: formData.newPassword,
				newPassword: "",
			}));
		} catch (error) {
			console.error("Error updating password", error);
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

	const validateForm = (data) => {
		const errors = {};
		if (!data.userName.trim()) {
			errors.userName = "User Name is required";
		}
		if (!data.email.trim()) {
			errors.email = "Email is required";
		}
		return errors;
	};

	return (
		<section className="bg-white rounded-3xl min-h-full w-full lg:w-3/5 xl:w-3/4 p-8 xl:py-10 xl:px-16">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col h-full gap-6 justify-between"
			>
				<div className="flex flex-col gap-6">
					<h2 className="text-left">Account</h2>
					<hr className="my-2 border-green" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full sm:w-1/2">
							Username
							<input
								type="text"
								name="userName"
								value={formData.userName}
								onChange={handleInputChange}
								className="input mt-3"
								required
							/>
							{errors.userName && (
								<span className="text-red-500 text-sm mt-1">
									{errors.userName}
								</span>
							)}
						</label>
						<label className="flex flex-col w-full sm:w-1/2">
							Email
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="input mt-3"
								required
							/>
							{errors.email && (
								<span className="text-red-500 text-sm mt-1">
									{errors.email}
								</span>
							)}
						</label>
					</div>

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full sm:w-1/2 relative">
							Password
							<input
								type={passwordVisible ? "text" : "password"}
								name="password"
								value={formData.password}
								onChange={handleInputChange}
								className="input mt-3"
							/>
							<button
								type="button"
								onClick={togglePasswordVisible}
								className="absolute inset-y-0 right-0 top-auto flex items-center px-3 py-4 mt-3"
							>
								{passwordVisible ? <FaEyeSlash /> : <FaEye />}
							</button>
						</label>
						<label className="flex flex-col w-full sm:w-1/2">
							Change password
							<input
								type="password"
								name="newPassword"
								value={formData.newPassword}
								onChange={handleInputChange}
								className="input mt-3"
							/>
							{errors.newPassword && (
								<span className="text-red-500 text-sm mt-1">
									{errors.newPassword}
								</span>
							)}
						</label>
					</div>
				</div>

				<button
					type="submit"
					className="py-4 px-6 rounded-xl bg-orange-200 hover:bg-orange-300 mx-auto"
				>
					Save Change
				</button>
			</form>
		</section>
	);
}

export default ProfileAccountPage;
