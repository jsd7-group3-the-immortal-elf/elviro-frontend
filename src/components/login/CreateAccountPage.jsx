//ใช้ useState
import { useState } from "react";
import ImageWhite from "../../../public/images/elviro_logo_white.png";
import ImageBlack from "../../../public/images/elviro_logo_black.png";

function CreateAccountPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//ฟังก์ชันสำหรับ รับค่า object

	//ฟังก์ชันสำหรับ CreateAccountPage
	function handleInputChange(event) {
		const { name, value } = event.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	return (
		<div className="">
			<section className="flex flex-col items-center my-9">
				<div className="flex mb-5 justify-center items-center gap-4">
					<img src={ImageBlack} alt="Elviro Logo" className="w-2/6" />
					<h1 className="font-semibold text-3xl">Elviro</h1>
				</div>
				<div className="">
					<form action="" className="">
						<label
							htmlFor="firstName"
							className="flex flex-col text-2xl pb-5 font-semibold w-[500px]"
						>
							First Name
						</label>
						<input
							id="firstName"
							className="bg-white border-b-2 border-gray-800 p-1 mb-16"
							type="text"
							// value={firstName}
							onChange={handleInputChange}
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
							className="bg-white border-b-2 border-gray-800 p-1 mb-16"
							type="text"
							// value={lastName}
							onChange={handleInputChange}
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
							className="bg-white border-b-2 border-gray-800 p-1 mb-16"
							type="email"
							// value={email}
							onChange={handleInputChange}
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
							className="bg-white border-b-2 border-gray-800 p-1 mb-16"
							type="password"
							// value={password}
							onChange={handleInputChange}
							required
						/>

						<button className="bg-orange-300 p-5 rounded-full font-semibold w-[400px] text-2xl pb-5">
							Create Account
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default CreateAccountPage;
