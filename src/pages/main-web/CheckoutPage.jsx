import CheckoutBilling from "../../components/checkout/CheckoutBilling";
import CheckoutProduct from "../../components/checkout/CheckoutProduct";
import CheckoutPayment from "../../components/checkout/CheckoutPayment";
import Motto from "../../components/Motto";
import Banner from "../../components/Banner";

function CheckoutPage() {
	return (
		<>
			<Banner />
			<section className="flex flex-col my-24 w-2/3 mx-auto lg:flex-row  lg:gap-20 ">
				<div className="lg:w-1/2 lg:flex lg:justify-end w-full">
					<CheckoutBilling className=" hidden lg:block " />
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
