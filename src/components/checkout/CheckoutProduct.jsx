// import mockup_sofa from "/images/mockup_sofa.png";

export default function CheckoutProduct({
	cartData,
	totalPrice,
	totalPriceTax,
}) {
	return (
		<div className="w-auto px-4">
			<div className="grid grid-col-1 gap-2 justify-center w-full">
				{/* น้ำของออกมาด้วยการ map */}
				{cartData?.map((product, index) => (
					<div key={index} className="flex w-full ">
						{/* {console.log(product)} */}
						<picture className="flex w-36 h-auto border-2 py">
							<img
								className="px-1"
								src={product.productDetail[0].productImage}
								alt={product.productDetail[0].productName}
							/>
						</picture>
						<div className="flex w-full flex-col justify-center  px-8 bg-[#F4F4F4]">
							<h3 className="text-base">
								{product.productDetail[0].productName}
							</h3>
							<ul className="mt-3 text-base flex w-full gap-4">
								<li>{product.cart.quantity}</li>
								<li>x</li>
								<li>
									{parseFloat(product.productDetail[0].price).toLocaleString()}{" "}
									฿
								</li>
							</ul>
							<div className="flex w-full py-2 justify-between items-center">
								<p className="px-4"></p>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* ราคาสินค้า */}
			<div className="flex flex-col justify-between w-auto mb-4">
				<ul className="w-auto gap-4 flex flex-col mb-7">
					<li className="flex justify-between">
						<span>7% Tax</span>
						<span>{(totalPrice * 0.07).toFixed(1)} ฿</span>
					</li>
					<li className="flex justify-between">
						<span>Subtotal</span>
						<span>{totalPrice} ฿</span>
					</li>
					<li className="flex justify-between">
						<span>Total</span>
						<span className=" text-xl text-[#B88E2F] font-bold ">
							{totalPriceTax} ฿
						</span>
					</li>
				</ul>
			</div>
			<hr className=" border-neutral-800" />
		</div>
	);
}
