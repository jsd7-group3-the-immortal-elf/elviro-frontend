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
		password: "",
	});

	//-----------Password--------------//
	//สร้าง state สลับระหว่างโชว์ password/text
	const [showPassword, setShowPassword] = useState(false);

	//Toggle ค่า true false
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	//----------ไว้ validate email + password -----------//

	//สร้าง array ไว้รับค่าจาก formData
	const [tableData, setTableData] = useState([]);

	//สร้าง account
	async function createUser(firstName, lastName, email, password) {
		try {
			await axiosInstance("/create-account", {
				firstName,
				lastName,
				email,
				password,
			});
			console.log(`Account created successfully.`);
		} catch (error) {
			console.log("Failed to create a user account", error);
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
		console.log("Form Submitted:", formData); //ไว้ดู check
		setTableData((prevData) => [...prevData, formData]);
		console.log(...tableData, formData);

		createUser();
		window.alert("Account created successfully");
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		});
	};

	//link ไปหน้า login
	const changeToLogin = () => {
		toggleOpenAccount();
		toggleOpenLogin();
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		});
	};

	const toggleCloseAccount = () => {
		toggleOpenAccount();
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		});
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
							className="flex flex-col md:w-lg gap-5"
						>
							<h1 className="text-center text-2xl md:text-4xl">
								Create a new account
							</h1>
							<label className="label-login">
								First Name
								<input
									className="input-login"
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</label>

							{/* Other label */}
							<label className="label-login">
								Last Name
								<input
									className="input-login"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Email */}
							<label className="label-login">
								Email
								<input
									className="input-login"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Password */}
							<label className="label-login">
								Password
								<div id="password-relative" className="relative">
									<input
										className="input-login w-full pr-10"
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

							<button type="submit" className="btn-login mb-5 ">
								Create Account
							</button>
							<section className="flex flex-col md:block text-center text-md md:text-xl pb-5">
								Already have an account?{" "}
								<span
									className="text-red-500 font-medium text-xl cursor-pointer hover:font-bold"
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
