//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.svg";
import ImageBlack from "/images/elviro_logo_black.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function ResetPage({
	openResetPage,
	setOpenResetPage,
	toggleOpenReset,
	toggleOpenLogin,
}) {
	//ไว้รับค่า object จาก formData
	const [resetData, setResetData] = useState({
		password: "",
		confirmPassword: "",
	});

	//-----------Password--------------//
	//สร้าง state สลับระหว่างโชว์ password/text
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [showAlertMatch, setShowAlertMatch] = useState(false);

	//Toggle ค่า true false
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	//สลับแสดงเตือนว่า password ตรงไหม
	const toggleAlertMatch = () => {
		setShowAlertMatch(!showAlertMatch);
	};

	//----------ไว้ validate email + password -----------//

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setResetData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//ตอนกด submit
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า

		if (resetData.password !== resetData.confirmPassword) {
			if (showAlertMatch === false) {
				toggleAlertMatch();
			}
			return;
		}
		console.log("Form Submitted:", resetData); //ไว้ดู check
		if (showAlertMatch === true) {
			toggleAlertMatch();
		}
		window.alert("Password Reset Successful!");
		toggleOpenReset();
		toggleOpenLogin();
	};

	//เอาค่าไปเก็บใน array

	return (
		<div
			className={`z-50 top-0 w-screen ${openResetPage ? "fixed" : "hidden"}`}
		>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-20 md:mb-14 rounded-t-3xl md:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
					<FaXmark
						className="text-3xl cursor-pointer absolute right-6 top-6 hover:text-4xl"
						onClick={toggleOpenReset}
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
							{/* Password */}
							<label className="label-login">
								New Password
								<div id="password-relative" className="relative">
									<input
										className="input-login"
										name="password"
										type={showPassword ? "text" : "password"}
										value={resetData.password}
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
							<label className="label-login">
								Confirm Password
								<div id="password-relative" className="relative">
									<input
										className="input-login"
										name="confirmPassword"
										type={showConfirmPassword ? "text" : "password"}
										value={resetData.confirmPassword}
										onChange={handleChange}
										minLength="5"
										required
									/>
									<span
										className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
										onClick={toggleConfirmPasswordVisibility}
									>
										{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
									</span>
								</div>
							</label>
							<section className="mx-4 text-red-500 font-semibold text-lg">
								<span className={showAlertMatch ? "block" : "hidden"}>
									Passwords do not match
								</span>
							</section>

							<button type="submit" className="btn-login">
								Reset Password
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ResetPage;
