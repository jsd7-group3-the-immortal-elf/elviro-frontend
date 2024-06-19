import VISA from "../../../public/images/VISA.png";
import JCB from "../../../public/images/JCB.png";
import MasterCard from "../../../public/images/MasterCard.png";

export default function PayCard() {
	return (
		<div>
			<div>
				<div id="card" className="my-1">
					<h4>Please select a card</h4>
					<input
						type="text"
						className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-auto"
						placeholder=" Visa"
					/>
				</div>
				<div id="cardNumber" className="my-1">
					<h4>Card Number</h4>
					<input
						type="text"
						className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-auto"
					/>
				</div>
				<div id="expiration" className="my-1">
					<h4>Expiration Date</h4>
					<div className="flex">
						<input
							type="month"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-auto"
						/>
					</div>
				</div>
				<div id="SecurityCode" className="my-1">
					<h4>Security Code</h4>
					<input
						type="text"
						className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-auto"
					/>
				</div>
				<figure className="flex gap-4 ">
					<img src={VISA} className="h-20 w-20" />
					<img src={JCB} className="h-20 w-20" />
					<img src={MasterCard} className="h-20 w-20" />
				</figure>
			</div>
		</div>
	);
}
