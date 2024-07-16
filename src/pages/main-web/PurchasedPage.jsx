import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PurchasedPage() {
	return (
		<section className="flex flex-col justify-center items-center w-full h-[calc(100vh-64px)] gap-8 ">
			{/* <div className="h-full w-auto my-48 flex flex-col justify-center items-center gap-4"> */}
			<FaCircleCheck className=" text-9xl text-green mb-8" />
			<h2>Payment Successful</h2>
			<h4>Thank you for your purchased</h4>
			<Link
				to={"/"}
				className="text-center mt-8 btn w-2/3 md:w-1/2 xl:w-1/4 text-3xl rounded-full bg-lightgreen hover:text-white  hover:bg-darkgreen hover:shadow-2xl  "
			>
				Continue
			</Link>
			{/* </div> */}
		</section>
	);
}
