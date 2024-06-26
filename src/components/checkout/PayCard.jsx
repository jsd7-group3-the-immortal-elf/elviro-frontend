import VISA from "/images/VISA.png";
import JCB from "/images/JCB.png";
import MasterCard from "/images/MasterCard.png";

export default function PayCard() {
	return (
		<section className="py-16 flex flex-col items-start w-full gap-7">
			<div id="card" className="my-1 w-full">
				<h4>Please select a card</h4>
				<input
					type="text"
					className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
					placeholder=" Visa"
				/>
			</div>
			<div id="cardNumber" className="my-1 w-full">
				<h4>Card Number</h4>
				<input
					type="text"
					className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
				/>
			</div>
			{/* --------------------เลขบัตรการด์-------------------- */}
			<section className="flex w-full gap-8 ">
				<div id="expiration" className="mb-1 w-1/2">
					<h4>Expiration Date</h4>
					<div className="flex">
						<input
							type="month"
							min="2024-05" //ตั้งค่าต่ำสุดตามวันปัจจุบัน
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</div>
				</div>
				<div id="SecurityCode" className="mb-1 w-1/2">
					<h4>Security Code</h4>
					<input
						type="number"
						className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
					/>
				</div>
			</section>
			<figure className="flex w-full justify-around ">
				<img src={VISA} className="h-auto w-1/4 max-h-44 max-w-44 " />
				<img src={JCB} className="h-auto w-1/4 max-h-44 max-w-44 " />
				<img src={MasterCard} className="h-auto w-1/4 max-h-44 max-w-44 " />
			</figure>
		</section>
	);
}
