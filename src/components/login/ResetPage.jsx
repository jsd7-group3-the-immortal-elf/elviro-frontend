import React from "react";
import Image from "../../../public/images/elviro_logo_white.png";

function ResetPage() {
	function handleInputChange() {}

	return (
		<div className="bg-gray-500 h-screen flex justify-center items-center">
			<section
				className=" w-4/5 h-4/5 flex
				
		"
			>
				<div className="bg-[var(--green)] w-1/2 h-full flex justify-center items-center">
					<img src={Image} alt="Elviro Logo" className="w-1/2" />
				</div>
				<div className="bg-white w-1/2 h-full flex flex-col items-center justify-center overflow-hidden gap-20">
					<section className="flex flex-col items-center">
						<h1 className="text-7xl pb-5 font-semibold">Elviro</h1>
						<h2 className="text-5xl pb-5 font-semibold text-gray-500">
							Reset Password
						</h2>
					</section>

					<form action="" className="flex flex-col">
						<label
							htmlFor="password"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							New Password
						</label>
						<input
							id="password"
							className="bg-white border-b-2 border-gray-800 p-1 mb-16 text-4xl font-semibold"
							type="password"
							// value={password}
							onChange={handleInputChange}
							required
						/>
						<label
							htmlFor="password"
							className="flex flex-col text-2xl pb-5 font-semibold"
						>
							Confirm your password
						</label>
						<input
							id="password"
							className="bg-white border-b-2 border-gray-800 p-1 mb-16 text-4xl font-semibold"
							type="password"
							// value={password}
							onChange={handleInputChange}
							required
						/>

						<button className="bg-orange-300 p-5 rounded-full font-semibold w-[400px] text-2xl pb-5">
							Submit
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default ResetPage;