//ใช้ useState
import { useState } from "react";
import ImageWhite from "/images/elviro_logo_white.svg";
import ImageBlack from "/images/elviro_logo_black.svg";
import { FaXmark, FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

function ForgetPage({
	openForgetPage,
	toggleOpenForget,
	toggleOpenLogin,
	toggleOpenReset,
}) {
	//ไว้รับค่า object จาก formData
	const [forgetData, setForgetData] = useState({
		email: "",
	});

	//state ของเปิด form

	const [showAlert, setShowAlert] = useState(false);

	//----------ไว้ validate email + password -----------//

	//ฟังก์ชันสำหรับ รับค่า object เมื่อใส่ค่าใน input
	const handleChange = (event) => {
		const { name, value } = event.target;

		setForgetData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const toggleShowAlert = () => {
		setShowAlert(!showAlert);
	};

	//Check username passwore

	//เอาค่าไปเก็บใน array
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า

		if (forgetData.email !== "example@email.com") {
			{
				if (showAlert === false) {
					toggleShowAlert();
				}

				return;
			}
		}

		alert("Reset link has been sent to your email");
		toggleOpenForget();
		toggleOpenReset();
		setForgetData({
			email: "",
		});
	};

	const changeToLogin = () => {
		toggleOpenForget();
		toggleOpenLogin();
		setForgetData({
			email: "",
		});
	};

	const toggleCloseForget = () => {
		toggleOpenForget();
		setForgetData({
			email: "",
		});
	};

	return (
		<div
			className={`z-50 top-0 w-screen ${openForgetPage ? "fixed" : "hidden"}`}
		>
			<div className="flex bg-black/50 lg:h-screen  justify-center md:items-center">
				<section className="relative h-4/5 mt-20 md:mb-14 rounded-t-3xl md:rounded-3xl bg-white w-full md:w-4/5 flex flex-col lg:flex-row items-center lg:w-4/5 md:h-4/5">
					<FaXmark
						className="text-3xl cursor-pointer absolute right-6 top-6 hover:text-4xl"
						onClick={toggleCloseForget}
					/>
					<FaArrowLeft
						className="text-3xl cursor-pointer absolute left-6 top-6 hover:text-4xl"
						onClick={changeToLogin}
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
							Forget your password?
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
									value={forgetData.email}
									onChange={handleChange}
									required
								/>
							</label>
							{/* Password */}
							<section className="mx-4 text-red-500 font-semibold text-lg">
								<span className={showAlert ? "block" : "hidden"}>
									Your email does not exist.
								</span>
							</section>

							<button type="submit" className="btn-login">
								Send reset link
							</button>
							<a
								href="./ForgetPage"
								className="hover:cursor-pointer hover:text-orange-800 hover:font-bold"
							></a>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

ForgetPage.propTypes = {
	openForgetPage: PropTypes.bool,
	toggleOpenForget: PropTypes.func,
	toggleOpenLogin: PropTypes.func,
	toggleOpenReset: PropTypes.func,
};

export default ForgetPage;
