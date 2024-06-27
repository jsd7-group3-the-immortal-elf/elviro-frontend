//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.svg";
import ImageBlack from "/images/elviro_logo_black.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function CreateAccountPage() {
	//ไว้รับค่า object จาก formData
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	//state ของเปิด form
	const [openForm, setOpenForm] = useState(true);

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

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setLoginData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//toggle เปิดปิด form
	const toggleOpenForm = () => {
		setOpenForm(!openForm);
	};

	//Check username passwore

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า

		if (
			loginData.email !== "example@email.com" ||
			loginData.password !== "password"
		) {
			window.alert("Your username or password is incorrect.");
			return;
		}

		console.log("Form Submitted:", loginData); //ไว้ดู check
		window.alert("Login Successful");
		toggleOpenForm();
	};

	return (
		<div className={openForm ? "block" : "hidden"}>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-20 md:mb-14 rounded-t-3xl md:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
					<FaXmark
						className="text-3xl cursor-pointer absolute right-6 top-6 hover:text-4xl"
						onClick={toggleOpenForm}
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
									className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal"
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
										className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal w-full pr-10"
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

							<button type="submit" className="btn-login">
								Create Account
							</button>
							<a
								href="./ForgetPage"
								className="hover:cursor-pointer hover:text-orange-800 hover:font-bold"
							>
								<p className="text-right">Forget your password?</p>
							</a>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CreateAccountPage;
