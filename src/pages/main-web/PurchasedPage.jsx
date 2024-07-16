import { FaCircleCheck } from "react-icons/fa6";
import Motto from "../../components/Motto";

export default function PurchasedPage() {
	return (
		<>
			<FaCircleCheck />
			<h1>Payment Successful</h1>
			<p>Thank you for your purchased</p>
			<button>Continue</button>
			<Motto />
		</>
	);
}
