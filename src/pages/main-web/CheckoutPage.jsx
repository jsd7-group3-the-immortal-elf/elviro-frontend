import { useState } from "react";
import PropTypes from "prop-types";
import CheckoutBilling from "../../components/checkout/CheckoutBilling";
import CheckoutProduct from "../../components/checkout/CheckoutProduct";
import CheckoutPayment from "../../components/checkout/CheckoutPayment";
import Motto from "../../components/Motto";
import Banner from "../../components/Banner";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
// import mockup_sofa from "/images/mockup_sofa.png";

function CheckoutPage({ tokenUserId }) {
	const [showInfo, setShowInfo] = useState(false);
	const [cartData, setCartData] = useState([]);
	// const [userData, setUserData] = useState([]);
	const [addressData, setAddressData] = useState({});
	const navigate = useNavigate();
	const userId = "669676540410f4d38d65f7c3";

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

	async function getProductInUser() {
		try {
			const response = await axiosInstance.get(
				`/cart/${userId}?isChecked=true`
			);
			console.log(response);
			const { data } = await response.data;
			console.log({ data });
			setCartData(data);
		} catch (error) {
			console.error("Not found user:", error);
		}
	}

	async function getUser() {
		const response = await axiosInstance.get(`/users/${userId}`);
		console.log(response);
		const { data } = await response.data;
		console.log(`getUser :  ${data}`);
		// setUserData(data);
		setAddressData(data.address.find((adr) => adr.default == true));
	}
	console.log(addressData);
	useEffect(() => {
		getProductInUser();
		getUser();
	}, [userId]);
	// console.log(`cartData :  ${cartData}`);
	//
	// const cartData = [
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "PÄRUP sofa",
	// 		productQuality: "3",
	// 		productPrice: "8999",
	// 	},
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "VIMLE sofa",
	// 		productQuality: "1",
	// 		productPrice: "15999",
	// 	},
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "GLOSTAD sofa",
	// 		productQuality: "2",
	// 		productPrice: "2999",
	// 	},
	// ];
	// const dataProfile = {
	// 	fistName: "Charlee",
	// 	lastName: "Meichom",
	// 	phone: "0812345678",
	// 	email: "charlee@mail.com",
	// };

	// เช็คว่า user id อะไร
	// นำข้อมูล user Assdress ข้อแต่ละ user เข้ามา แกะ token เอา Id มา
	// นำProduct ที่ user เลือก ในหน้า cart เข้ามา
	//
	//validat เช็คข้อมูลมาใส่ข้อมูลเข้ามาหมดไหม

	//ข้อมูล user

	function handleSubmit() {
		navigate("/cart/checkout/purchased");
	}

	return (
		<>
			<Banner />
			<section className="flex flex-col items-center justify-start my-24 w-2/3 mx-auto lg:flex-row lg:items-start lg:gap-20 ">
				<button
					className="lg:hidden mb-7 h-12 w-11/12 back text-xl text-black border border-neutral-500 rounded-xl hover:shadow-xl active:shadow-xl active:bg-gray-100"
					onClick={toggle}
				>
					Personal and Address
				</button>
				<div
					className={`${showInfo ? "" : "hidden"} lg:flex w-1/2 justify-end `}
				>
					{/* <CheckoutBilling
						firstName={addressData.address.firstName}
						lastName={addressData.address.lastName}
						phone={addressData.address.phone}
						email={addressData.address.email}
					/> */}
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/2 ">
					<CheckoutProduct inputArrayProduct={cartData} />
					<CheckoutPayment handleSubmit={handleSubmit} />
				</div>
			</section>
			<Motto />
		</>
	);
}

CheckoutPage.propTypes = {
	tokenUserId: PropTypes.string,
};

export default CheckoutPage;

//`/cart/${userId}?isChecked=true`
// cart:[
// 	{
// 	productID,
// 	quantity,
// 	inChecked,
// 	productDetail:{แล้วแสดงข้อมูล อ้างอิงจาก productID }
// 	}
// 	]
