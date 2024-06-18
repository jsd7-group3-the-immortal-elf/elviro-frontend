function CartBanner() {
	return (
		<>
			<section id="cart_description">
				<h3 className="pt-4 pl-4 md:hidden">Cart (1)</h3>
				<div className="hidden md:flex flex-row py-12 align-middle">
					<picture>
						<img className="max-w-96 px-8" src="./public/cart-image.png" />
					</picture>
					<div className="flex flex-col gap-2 px-8 justify-center">
						<h2 className="text-left italic text-4xl pb-4 text-[#B99470]">
							Here’s your cart list.
						</h2>
						<h3>Check your items well before checkout.</h3>
						<p className="text-[#6B6B6B]">
							All items will include
							<span className="font-bold">tax of 7% </span>
							Shipping fee will be included. Free shipping of
							<span className="font-bold"> 1,000 Baht</span> purchase after tax.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
export default CartBanner;
