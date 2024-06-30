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

	const [passwordVisible, setPasswordVisble] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const respones = await axios.get(
					"https://65f455dcf54db27bc0217060.mockapi.io/todos/2"
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

	const togglePasswordVisible = () => {
		setPasswordVisble(!passwordVisible);
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
							{errors.userName && (
								<span className="text-red-500 text-sm mt-1">
									{errors.userName}
								</span>
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
							{errors.email && (
								<span className="text-red-500 text-sm mt-1">
									{errors.email}
								</span>
							)}
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
							/>
							<button
								type="button"
								onClick={togglePasswordVisible}
								className="absolute inset-y-0 right-0 top-auto flex items-center px-3 py-4 mt-3"
							>
								{passwordVisible ? <FaEyeSlash /> : <FaEye />}
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
								<span className="text-red-500 text-sm mt-1">
									{errors.newPassword}
								</span>
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
