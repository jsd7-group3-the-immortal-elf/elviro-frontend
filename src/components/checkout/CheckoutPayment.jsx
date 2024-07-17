import { IoCardSharp } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import PayCard from "../../components/checkout/PayCard";
export default function CheckoutPayment({
	handleSubmit,
	postOder,
	setPayment,
}) {
	return (
		<div className="my-11 flex flex-col items-center w-full">
			<button
				onClick={setPayment("QR Code")}
				className=" flex items-center  max-w-[400px] w-full  border-2 rounded-3xl  hover:shadow-xl active:shadow-xl active:bg-gray-100 mb-11"
			>
				<BsQrCodeScan className=" text-6xl my-4 mx-9" />
				<h4>QR Code</h4>
			</button>
			<button
				onClick={setPayment("Card")}
				className=" flex items-center  max-w-[400px] w-full  border-2 rounded-3xl  hover:shadow-xl active:shadow-xl active:bg-gray-100 mb-5"
			>
				<IoCardSharp className=" text-6xl my-4 mx-9" />
				<h4>Card</h4>
			</button>
			{/* <PayCard className="w-full" /> */}
			<p>
				Your personal data will be used to support your experience throughout
				this website, to manage access to your account, and for other purposes
				described in our <b>privacy policy</b>.
			</p>
			<button
				onClick={handleSubmit}
				className="mt-7 h-16 w-full max-w-80 text-3xl text-black border border-neutral-500 rounded-xl  hover:shadow-xl active:shadow-2xl active:bg-gray-100 "
			>
				Place order
			</button>
		</div>
	);
}
