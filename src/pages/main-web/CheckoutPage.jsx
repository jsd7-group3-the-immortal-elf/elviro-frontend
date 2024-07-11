import CheckoutBilling from "../../components/checkout/CheckoutBilling";
import CheckoutProduct from "../../components/checkout/CheckoutProduct";
import CheckoutPayment from "../../components/checkout/CheckoutPayment";
import Motto from "../../components/Motto";
import Banner from "../../components/Banner";
import { useState } from "react";

function CheckoutPage() {
	const [toggleBilling, setToggleBilling] = useState(true);
	const buttonBilling = () => {
		setToggleBilling(!toggleBilling);
	};
	const dataProfile = {
		fistName: "Charlee",
		lastName: "Meichom",
		phone: "0812345678",
		email: "charlee@mail.com",
	};

	return (
		<>
			<Banner />
			<section className="flex flex-col items-center my-24 w-2/3 mx-auto lg:flex-row  lg:gap-20 ">
				<button
					className="lg:hidden mb-7 h-12 w-11/12  text-xl text-black border-2 border-neutral-500 rounded-xl shadow-lg hover:shadow-2xl active:shadow-2xl active:bg-gray-100"
					onClick={buttonBilling}
				>
					Personal and Address
				</button>
				<div
					className={
						window.innerWidth >= 1024
							? "flex  w-1/2 justify-end"
							: toggleBilling
							? "flex w-full"
							: "hidden"
					}
				>
					<CheckoutBilling
						// fistName={dataProfile.fistName}
						lastName={dataProfile.lastName}
						phone={dataProfile.phone}
						email={dataProfile.email}
					/>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/2 ">
					<CheckoutProduct />
					<CheckoutPayment />
				</div>
			</section>
			<Motto />
		</>
	);
}

export default CheckoutPage;
