import { useState } from "react";
import ImageWhite from "../../../public/images/elviro_logo_white.png";
import ImageBlack from "../../../public/images/elviro_logo_black.png";

function ForgetPage() {
	//ไว้รับค่า object จาก formData
	const [emailData, setEmailData] = useState({ email: "" });

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setEmailData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//handleSubmit ให้ส่งเข้าิีเมล์เดี๋ยวแยกทีหลัง

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
					<form className="flex flex-col md:w-2/3">
						<label
							htmlFor="email"
							className="flex flex-col text-2xl md:text-4xl pb-5 font-semibold"
						>
							Forget your Password?
						</label>
						<input
							id="email"
							className="bg-white border-b-2 border-gray-800 p-1 mb-8 text-xl md:text-2xl font-normal "
							type="text"
							name="email"
							value={emailData.email}
							onChange={handleChange}
							placeholder="Insert your email"
							required
						/>
						<button
							type="submit"
							className="bg-orange-300 p-3 md:p-5 rounded-full font-semibold md:text-2xl mb-5 md:mb-0 border-8 border-orange-300 hover:border-orange-400 hover:shadow-xl"
						>
							Send reset link
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
export default ForgetPage;
