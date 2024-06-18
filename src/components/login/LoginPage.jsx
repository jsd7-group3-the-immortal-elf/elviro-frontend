import { useState } from "react";
import ImageWhite from "../../../public/images/elviro_logo_white.png";
import ImageBlack from "../../../public/images/elviro_logo_black.png";

function LoginPage() {
	//ไว้รับค่า object จาก formData
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

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

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า
		console.log("Form Submitted:", formData); //ไว้ดู check
		setTableData((prevData) => [...prevData, formData]);
		console.log(...tableData, formData);
	};

	return (
		<div className="md:bg-gray-500 md:h-screen md:flex md:justify-center md:items-center">
			<section className="flex flex-col md:flex-row items-center md:w-4/5 md:h-4/5">
				<div className="flex my-9 justify-center items-center gap-4 md:my-0  md:bg-green md:w-1/2 md:h-full md:flex-col">
					<img
						src={ImageBlack}
						alt="Elviro Logo"
						className="w-1/2 md:hidden
					"
					/>
					<img
						src={ImageWhite}
						alt="Elviro Logo"
						className="hidden md:flex w-1/2 
					"
					/>
					<h1 className="hidden md:block font-semibold text-2xl md:text-7xl md:text-white">
						Elviro
					</h1>
				</div>

				<div className="md:bg-white md:w-1/2 md:h-full md:flex md:items-center md:justify-center md:overflow-hidden">
					<form onSubmit={handleSubmit} className="flex flex-col md:w-2/3">
						<label
							htmlFor="firstName"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							First Name
						</label>
						<input
							id="firstName"
							className="bg-white border-b-2 border-gray-800 p-1 mb-8 text-2xl font-normal "
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
						<label
							htmlFor="lastName"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							Last Name
						</label>
						<input
							id="lastName"
							className="bg-white border-b-2 border-gray-800 p-1 mb-8 text-2xl font-normal"
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
						<label
							htmlFor="email"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							Email
						</label>
						<input
							id="email"
							className="bg-white border-b-2 border-gray-800 p-1 mb-8 text-2xl font-normal"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<label
							htmlFor="password"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							Password
						</label>
						<input
							id="password"
							className="bg-white border-b-2 border-gray-800 p-1 mb-16 text-2xl font-normal"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
						/>

						<button
							type="submit"
							className="bg-orange-300 p-5 rounded-full font-semibold text-2xl mb-5 md:mb-0 border-8 border-orange-300 hover:border-orange-400 hover:shadow-xl"
						>
							Create Account
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default LoginPage;
