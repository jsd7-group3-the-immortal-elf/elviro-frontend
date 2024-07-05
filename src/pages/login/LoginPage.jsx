//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.svg";
import ImageBlack from "/images/elviro_logo_black.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import PropTypes from "prop-types";

function LoginPage({
	openLoginPage,
	setOpenLoginPage,
	toggleOpenLogin,
	openAccountPage,
	setOpenAccountPage,
	openForgetPage,
	setOpenForgetPage,
}) {
	//ไว้รับค่า object จาก formData
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	//-----------Password--------------//
	//สร้าง state สลับระหว่างโชว์ password/text
	const [showPassword, setShowPassword] = useState(false);

	const [showAlert, setShowAlert] = useState(false);

	//Toggle ค่า true false
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleShowAlert = () => {
		setShowAlert(!showAlert);
	};

	//----------ไว้ validate email + password -----------//

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setLoginData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า

		if (
			loginData.email !== "example@email.com" ||
			loginData.password !== "password"
		) {
			if (showAlert === false) {
				toggleShowAlert();
			}
			return;
		}
		console.log("Form Submitted:", loginData); //ไว้ดู check
		setOpenLoginPage(!openLoginPage);
		setLoginData({
			email: "",
			password: "",
		});
	};

	//เมื่อกดให้ลิงค์ไปหน้า CreateAccountPage
	const changeToLogin = () => {
		setOpenLoginPage(!openLoginPage);
		setOpenAccountPage(!openAccountPage);
		setLoginData({
			email: "",
			password: "",
		});
	};

	//คลิก forgetPassword
	const forgetPassword = () => {
		setOpenLoginPage(!openLoginPage);
		setOpenForgetPage(!openForgetPage);
		setLoginData({
			email: "",
			password: "",
		});
	};

	// ตอนกด XMark
	const toggleCloseLogin = () => {
		setLoginData({
			email: "",
			password: "",
		});
		toggleOpenLogin();
	};

	return (
		<div
			className={`z-50 top-0 w-screen ${
				openLoginPage ? "fixed" : "hidden animate-openLogin"
			}`}
		>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-20 md:mb-14 rounded-t-3xl md:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
					<FaXmark
						className="text-3xl cursor-pointer absolute right-6 top-6 hover:text-4xl"
						onClick={toggleCloseLogin}
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
						<h1 className="text-5xl md:text-6xl">Elviro</h1>
						<h2 className="text-neutral-500 text-2xl md:text-3xl mb-10">
							Welcome Back
						</h2>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col w-full lg:w-3/5 gap-5"
						>
							{/* Email */}
							<label className="label-login">
								Email
								<input
									className="input-login"
									type="email"
									name="email"
									value={loginData.email}
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
										value={loginData.password}
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
							<section
								onClick={forgetPassword}
								className="text-right  hover:cursor-pointer hover:text-orange-800 hover:font-bold"
							>
								Forget your password?
							</section>
							<section className="mx-4 text-red-500 font-semibold text-lg">
								<span className={showAlert ? "block" : "hidden"}>
									Your Username or Password is incorrect.
								</span>
							</section>

							<button type="submit" className="btn-login">
								Login
							</button>
							<section className="flex flex-col md:block text-center text-md md:text-xl pb-5">
								New to Elviro?{" "}
								<span
									className="text-red-500 font-medium text-xl cursor-pointer hover:font-bold"
									onClick={changeToLogin}
								>
									Create a new account
								</span>
							</section>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

LoginPage.propTypes = {
	openLoginPage: PropTypes.bool,
	setOpenLoginPage: PropTypes.func,
	toggleOpenLogin: PropTypes.func,
	openAccountPage: PropTypes.bool,
	setOpenAccountPage: PropTypes.func,
	openForgetPage: PropTypes.bool,
	setOpenForgetPage: PropTypes.func,
};

export default LoginPage;
