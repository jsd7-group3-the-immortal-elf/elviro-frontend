//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.svg";
import ImageBlack from "/images/elviro_logo_black.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";

function CreateAccountPage({
	openAccountPage,
	toggleOpenAccount,
	toggleOpenLogin,
}) {
	//ไว้รับค่า object จาก formData
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
	});

	//-----------Password--------------//
	//สร้าง state สลับระหว่างโชว์ password/text
	const [showPassword, setShowPassword] = useState(false);

	const [showEmailAlert, setShowEmailAlert] = useState(false);
	const [showUserAlert, setShowUserAlert] = useState(false);

	//Toggle ค่า true false
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	//----------ไว้ validate email + password -----------//

	const profile = {
		firstName: formData.firstName,
		lastName: formData.lastName,
		email: formData.email,
	};

	const account = {
		username: formData.username,
		password: formData.password,
	};

	//Create a new account-----
	async function createNewAccount(profile, account) {
		try {
			const response = await axiosInstance.post(`/users/create-account`, {
				profile,
				account,
			});

			const { message } = response.data;
			alert(message);
		} catch (error) {
			console.log("Failed to create an account", error);
		}
	}

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า

		//สร้าง Account ใหม่
		createNewAccount(profile, account);
		alert(
			`New account with username ${formData.username} created successfully.`
		);

		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		});
		setShowEmailAlert(false);
		setShowUserAlert(false);
		toggleOpenAccount();
		toggleOpenLogin();
	};

	//link ไปหน้า login
	const changeToLogin = () => {
		toggleOpenAccount();
		toggleOpenLogin();
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		});
		setShowEmailAlert(false);
		setShowUserAlert(false);
	};

	const toggleCloseAccount = () => {
		toggleOpenAccount();
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		});
		setShowEmailAlert(false);
		setShowUserAlert(false);
	};

	return (
		<div
			className={`z-50 top-0 w-screen  ${
				openAccountPage ? "fixed " : "hidden"
			}`}
		>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-20 md:mb-14 rounded-t-3xl md:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
					<FaXmark
						className="text-3xl cursor-pointer absolute right-6 top-6 hover:text-4xl"
						onClick={toggleCloseAccount}
					/>
					<div className="rounded-l-3xl flex my-9 justify-center items-center gap-4 lg:my-0  lg:bg-green lg:w-1/2 lg:h-full md:flex-col">
						<img
							src={ImageBlack}
							alt="Elviro Logo"
							className="w-1/2 max-w-lg lg:hidden
					"
						/>
						<img
							src={ImageWhite}
							alt="Elviro Logo"
							className="hidden lg:flex w-1/2 
					"
						/>
						<h1 className="hidden lg:block font-semibold text-2xl md:text-7xl md:text-white">
							Elviro
						</h1>
					</div>

					<div className="0 h-full flex flex-col items-center justify-center md:overflow-hidden  lg:h-full lg:w-1/2">
						{/* Main form */}
						<form
							onSubmit={handleSubmit}
							className="flex flex-col md:w-lg gap-5 md:gap-2"
						>
							<h1 className="text-center text-2xl md:text-4xl md:mb-5">
								Create a new account
							</h1>
							<label className="label-createAccount">
								<section>
									First Name <span className="text-red-500">*</span>
								</section>
								<input
									className="input-createAccount"
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</label>

							{/* Other label */}
							<label className="label-createAccount">
								<section>
									Last Name <span className="text-red-500">*</span>
								</section>

								<input
									className="input-createAccount"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Email */}
							<label className="label-createAccount">
								<section>
									Email <span className="text-red-500">*</span>
								</section>

								<input
									className="input-createAccount"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="label-createAccount">
								<section>
									Username <span className="text-red-500">*</span>
								</section>
								<input
									className="input-createAccount"
									type="text"
									name="username"
									value={formData.username}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Password */}
							<label className="label-createAccount">
								<section>
									Password <span className="text-red-500">*</span>
								</section>

								<div id="password-relative" className="relative mb-4">
									<input
										className="input-createAccount w-full pr-10"
										name="password"
										type={showPassword ? "text" : "password"}
										value={formData.password}
										onChange={handleChange}
										minLength="5"
										required
									/>
									<span
										className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
										onClick={togglePasswordVisibility}
									>
										{showPassword ? <FaEye /> : <FaEyeSlash />}
									</span>
								</div>
							</label>
							<section className="mx-4 text-red-500 font-semibold text-lg">
								<span className={showEmailAlert ? "block" : "hidden"}>
									This user email has been registered.
								</span>
								<span className={showUserAlert ? "block" : "hidden"}>
									This username has been used. Please make a new one.
								</span>
							</section>
							<button type="submit" className="btn-login">
								Create Account
							</button>
							<section className="flex flex-col md:block text-md md:text-md pb-5 text-end">
								Already have an account?{" "}
								<span
									className="text-red-500 font-medium text-md cursor-pointer hover:font-bold"
									onClick={changeToLogin}
								>
									Login
								</span>
							</section>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

CreateAccountPage.propTypes = {
	openAccountPage: PropTypes.bool,
	setOpenAccountPage: PropTypes.func,
	toggleOpenAccount: PropTypes.func,
	openLoginPage: PropTypes.bool,
	setOpenLoginPage: PropTypes.func,
	toggleOpenLogin: PropTypes.func,
};

export default CreateAccountPage;
