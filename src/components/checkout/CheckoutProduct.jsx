import mockup_sofa from "../../../public/images/mockup_sofa.png";

export default function CheckoutProduct() {
	return (
		<div className="w-full flex flex-col items-center">
			{/* --------------------  หัวข้อ  -------------------- */}
			<div id="price" className="flex flex-col justify-between w-full mb-4">
				<div className="flex justify-between w-full">
					<h3>Product</h3>
					<h3>Subtotal</h3>
				</div>
				{/* --------------------  ลิสรายการ  -------------------- */}
				<ul id="total_price" className="w-full gap-4 flex flex-col mb-7">
					<li className="flex justify-between">
						<span>
							Name_Product x <span>1</span>
						</span>
						<span>999 Baht</span>
					</li>
					<li className="flex justify-between">
						<span>7% Tax</span>
						<span>70 Baht</span>
					</li>
					<li className="flex justify-between">
						<span>Subtotal</span>
						<span>1069 Baht</span>
					</li>
					<li className="flex justify-between">
						<span>Total</span>
						<span className=" text-xl text-[#B88E2F] font-bold ">
							1069 Baht
						</span>
					</li>
				</ul>
			</div>
			{/* --------------------  รูป  -------------------- */}
			<input
				type="image"
				id="image_product"
				alt="image_product"
				src={mockup_sofa}
				className="max-w-52 bg-origin-border rounded-2xl"
			/>
			<hr className=" border-neutral-800" />
		</div>
	);
}
