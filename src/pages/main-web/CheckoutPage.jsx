import CheckoutBilling from "../../components/checkout/CheckoutBilling";
import CheckoutProduct from "../../components/checkout/CheckoutProduct";
import CheckoutPayment from "../../components/checkout/CheckoutPayment";
import Motto from "../../components/Motto";
import Banner from "../../components/Banner";
function CheckoutPage() {
	return (
		<div>
			<Banner />
			<section className="flex flex-col items-center my-24 mx-36 md:flex-row md:items-start md:justify-evenly  ">
				<div className="md:w-2/5 md:flex md:justify-end w-full">
					<CheckoutBilling className=" hidden md:block " />
				</div>
				<div className="flex flex-col items-center w-full md:w-2/5 ">
					<CheckoutProduct />
					<CheckoutPayment />
				</div>
			</section>
			<Motto />
		</div>
	);
}
export default CheckoutPage;
