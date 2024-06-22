//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.png";
import ImageBlack from "/images/elviro_logo_black.png";
import { FaTimes, FaEyeSlash, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function CreateAccountPage() {
	//ไว้รับค่า object จาก formData
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
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

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//toggle เปิดปิด form
	const toggleOpenForm = () => {
		setOpenForm(!openForm);
	};

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า
		console.log("Form Submitted:", formData); //ไว้ดู check
		setTableData((prevData) => [...prevData, formData]);
		console.log(...tableData, formData);
	};

	return (
		<div className={openForm ? "block" : "hidden"}>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-14 md:mb-14 rounded-t-3xl sm:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
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
						<form
							onSubmit={handleSubmit}
							className="flex flex-col md:w-lg gap-5"
						>
							<h1 className="text-2xl md:text-4xl">Create a new account</h1>
							<label className="text-neutral-500 text-md  flex flex-col font-semibold">
								First Name
								<input
									className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal "
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</label>

							{/* Other label */}
							<label className="text-neutral-500 text-md flex flex-col font-semibold">
								Last Name
								<input
									className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Email */}
							<label className="text-neutral-500 text-md  flex flex-col font-semibold">
								Email
								<input
									className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Password */}
							<label className="text-neutral-500 text-md  flex flex-col pb-5 font-semibold">
								Password
								<div id="password-relative" className="relative">
									<input
										className="bg-white border-b-2 border-text-neutral-500 p-1 font-normal w-full pr-10"
										// type={showPassword ? "text" : "password"}
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

							<button
								type="submit"
								className="bg-orange-200 p-1 md:p-3 rounded-full font-semibold text-lg md:mb-5 md:text-2xl mb-5 md:mb-0 hover:bg-orange-300  hover:shadow-xl"
							>
								Create Account
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CreateAccountPage;
