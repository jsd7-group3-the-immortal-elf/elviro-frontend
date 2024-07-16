import CheckoutBilling from "../../components/checkout/CheckoutBilling";
import CheckoutProduct from "../../components/checkout/CheckoutProduct";
import CheckoutPayment from "../../components/checkout/CheckoutPayment";
import Motto from "../../components/Motto";
import Banner from "../../components/Banner";
import { useState } from "react";
import mockup_sofa from "/images/mockup_sofa.png";

function CheckoutPage() {
	const [showInfo, setShowInfo] = useState(false);

	function toggle() {
		setShowInfo(!showInfo);
	}
	// เปิดปิดแบบเก่า
	// const [toggleBillingDesktop, setToggleBillingDesktop] = useState(true);
	// const [toggleBilling, setToggleBilling] = useState(false);
	// const buttonBilling = () => {
	// 	setToggleBilling(!toggleBilling);
	// };
	//หน้าต่างใหญ่จะเปิดและปิด
	// const handleResize = () => {
	// 	if (window.innerWidth >= 1024) {
	// 		setToggleBillingDesktop(true);
	// 	} else {
	// 		setToggleBillingDesktop(false);
	// 	}
	// };
	//เช็คว่าหน้าต่างขนาดเท่าไหร่
	// useEffect(() => {
	// 	// Add event listener for window resize
	// 	window.addEventListener("resize", handleResize);
	// 	handleResize(); // Check the window size initially
	// 	// Cleanup event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);
	// ข้อมูล Product
	const priceList = [
		{
			productPicture: mockup_sofa,
			productName: "PÄRUP sofa",
			productQuality: "3",
			productPrice: "8999",
		},
		{
			productPicture: mockup_sofa,
			productName: "VIMLE sofa",
			productQuality: "1",
			productPrice: "15999",
		},
		{
			productPicture: mockup_sofa,
			productName: "GLOSTAD sofa",
			productQuality: "2",
			productPrice: "2999",
		},
	];
	const dataProfile = {
		fistName: "Charlee",
		lastName: "Meichom",
		phone: "0812345678",
		email: "charlee@mail.com",
	};

	// เช็คว่า user id อะไร
	// นำข้อมูล user Assdress ข้อแต่ละ user เข้ามา แกะ token เอา Id มา
	// นำProduct ที่ user เลือก ในหน้า cart เข้ามา
	//
	//validat เช็คข้อมูลมาใส่ข้อมูลเข้ามาหมดไหม

	//ข้อมูล user

	return (
		<>
			<Banner />
			<section className="flex flex-col items-center justify-start my-24 w-2/3 mx-auto lg:flex-row lg:items-start lg:gap-20 ">
				<button
					className="lg:hidden mb-7 h-12 w-11/12 back text-xl text-black border border-neutral-500 rounded-xl hover:shadow-xl active:shadow-xl active:bg-gray-100"
					// onClick={buttonBilling}
					onClick={toggle}
				>
					Personal and Address
				</button>
				<div
					// className={`
					// 	// {toggleBillingDesktop ? "flex" : toggleBilling ? "flex" : "hidden"}
					// flex  w-1/2 justify-end md:w-full`}
					className={`${showInfo ? "" : "hidden"} lg:flex w-1/2 justify-end `}
				>
					<CheckoutBilling
						fistName={dataProfile.fistName}
						lastName={dataProfile.lastName}
						phone={dataProfile.phone}
						email={dataProfile.email}
					/>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/2 ">
					<CheckoutProduct inputArrayProduct={priceList} />
					<CheckoutPayment />
				</div>
			</section>
			<Motto />
		</>
	);
}

export default CheckoutPage;
