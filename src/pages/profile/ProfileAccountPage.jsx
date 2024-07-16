import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";
// import { useParams } from "react-router-dom";

function ProfileAccountPage({ tokenUserId }) {
	// const [formData, setFormData] = useState({});

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		username: "",
		password: "",
		newPassword: "",
	});

	// const [passwordVisible, setPasswordVisible] = useState(false);
	const [errors, setErrors] = useState({});
	// const { id } = useParams();

	const fetchData = async () => {
		try {
			const response = await axiosInstance.get(`/users/${tokenUserId}`);
			const data = response.data.data;
			console.log(response.data.data);
			setFormData({
				firstName: data.profile.firstName,
				lastName: data.profile.lastName,
				email: data.profile.email,
				phone: data.profile.phone,
				username: data.account.username,
				password: "",
				newPassword: "",
			});
		} catch (error) {
			console.error("Error fetching Data: ", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormdata) => ({
			...prevFormdata,
			[name]: value,
		}));
	};

	// const togglePasswordVisible = () => {
	// 	setPasswordVisible(!passwordVisible);
	// };

	const validateForm = (data) => {
		const errors = {};
		if (!data.username.trim()) {
			errors.username = "Username is required";
		}
		if (!data.email.trim()) {
			errors.email = "Email is required";
		}
		if (data.newPassword && data.newPassword.length < 8) {
			errors.newPassword = "New password must be at least 8 characters long";
		}
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
			try {
				await axiosInstance.patch(`/users/${tokenUserId}`, {
					username: formData.username,
					email: formData.email,
				});
				alert("Profile updated Successfully!");

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
			await axiosInstance.put(`/users/${tokenUserId}`, {
				password: formData.newPassword,
			});
			alert("Password updated");
			setFormData((prevFormData) => ({
				...prevFormData,
				password: "",
				newPassword: "",
			}));
		} catch (error) {
			console.error("Error updating password", error);
			alert("Password update failed!");
		}
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
								name="username"
								value={formData.username}
								onChange={handleInputChange}
								className="input mt-3"
								required
							/>
							{errors.username && (
								<span className="text-red-500 text-sm mt-1">
									{errors.username}
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
						{/* <label className="flex flex-col w-full sm:w-1/2 relative">
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
						</label> */}
						<label className="flex flex-col w-full sm:w-1/2 pr-3">
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

ProfileAccountPage.propTypes = {
	tokenUserId: PropTypes.string,
};

export default ProfileAccountPage;

// const validationForm = (data) => {
// 	const errors = {};

// 	if (!data.userName.trim()) {
// 		errors.userName = "Name on Card required";
// 	}
// 	if (!data.email.trim()) {
// 		errors.email = "Email required";
// 	} else if (!/\S+@\S+\.\S+/.test(data.email)) {
// 		errors.email = "Email is invalid";
// 	}
// 	if (!data.password) {
// 		errors.password = "Password is required";
// 	} else if (data.password.length < 8) {
// 		errors.password = "Must be at least 8 characters long";
// 	}
// 	if (data.newPassword && data.newPassword.length < 8) {
// 		errors.newPassword = "New Password must be at least 8 characters long";
// 	}
// 	return errors;
// };
