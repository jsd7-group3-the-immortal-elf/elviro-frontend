import { checkPropTypes } from "prop-types";
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
	const [userData, setUserData] = useState([]);
	const [addressData, setAddressData] = useState({});
	const [payment, setPayment] = useState("");
	const navigate = useNavigate();
	// const userId = "6696a3abfe99d24b14e13cc5";
	function toggle() {
		setShowInfo(!showInfo);
	}
	// ดึงข้อมูลจาก Product
	async function getProductInUser() {
		try {
			const response = await axiosInstance.get(
				`/cart/${tokenUserId}?isChecked=true`
			);
			const { data } = await response.data;
			setCartData(data);
		} catch (error) {
			console.log("Not found user:", error);
		}
	}
	// console.log(cartData);

	// ดึงข้อมูลจาก user
	async function getUser() {
		try {
			const response = await axiosInstance.get(`/users/${tokenUserId}`);
			const { data } = await response.data;
			setUserData(data);
			setAddressData(data.address.find((adr) => adr.default == true));
		} catch (error) {
			console.log("Not found user:", error);
		}
	}
	// console.log(userData);

	useEffect(() => {
		getProductInUser();
		getUser();
	}, []);

	// console.log(orderDetail);

	//คำนวนราคารวม บวก tax
	const priceProduct = cartData.map((product) => {
		return product.productDetail[0].price * product.cart.quantity;
	});

	// console.log(priceProduct);

	const totalPrice = priceProduct.reduce((numberOne, numberTwo) => {
		return numberOne + numberTwo;
	}, 0);

	const totalPriceTax = (totalPrice + totalPrice * 0.07).toFixed(1);

	//ส่ง Data เป็น order
	async function postOder() {
		const cartProduct = cartData.map((product) => {
			return {
				productId: product.productDetail[0]._id,
				quantity: product.cart.quantity,
			};
		});
		// console.log(cartProduct);
		const orderDetail = {
			orderDetail: cartProduct,
			totalPrice: totalPriceTax,
			payment: payment,
			customer: {
				customerId: userData._id,
				addressIndex: "0",
			},
		};
		// console.log(orderDetail);
		// async function postOder() {
		try {
			await axiosInstance.post(`/orders/`, orderDetail);
		} catch (error) {
			console.log(`postOder error`, error);
		}
	}

	function handleSubmit() {
		postOder();
		navigate("/cart/checkout/purchased");
	}
	return (
		<>
			<Banner h3="Checkout" />
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
					<CheckoutBilling
						firstName={addressData?.firstNameAdr}
						lastName={addressData?.lastNameAdr}
						phone={addressData?.phoneAdr}
						address={addressData?.address}
						province={addressData?.province}
						district={addressData?.district}
						subDistrict={addressData?.subDistrict}
						postalCode={addressData?.postalCode}
						email={userData?.profile?.email}
					/>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/2 ">
					<CheckoutProduct
						cartData={cartData}
						totalPrice={totalPrice}
						totalPriceTax={totalPriceTax}
					/>
					<CheckoutPayment
						handleSubmit={handleSubmit}
						setPayment={setPayment}
					/>
				</div>
			</section>
			<Motto />
		</>
	);
}

CheckoutPage.checkPropTypes = {
	tokenUserId: checkPropTypes.string,
};

export default CheckoutPage;
1;
