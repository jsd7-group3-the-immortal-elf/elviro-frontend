import { FaCircleCheck } from "react-icons/fa6";
import Motto from "../../components/Motto";
import { Link } from "react-router-dom";

export default function PurchasedPage() {
	return (
		<>
			<section className="flex flex-col justify-between items-center w-full">
				<div className="h-full w-auto my-48 flex flex-col justify-center items-center gap-4">
					<FaCircleCheck className=" text-9xl text-green mb-8" />
					<h1>Payment Successful</h1>
					<h3>Thank you for your purchased</h3>
					<Link
						to={"/"}
						className="text-center mt-8 p-1 w-full text-3xl rounded-full text-black bg-lightgreen hover:text-white border border-neutral-50  hover:bg-brown hover:shadow-xl active:shadow-2xl active:bg-gray-100 "
					>
						Continue
					</Link>
				</div>
				<Motto />
			</section>
		</>
	);
}
