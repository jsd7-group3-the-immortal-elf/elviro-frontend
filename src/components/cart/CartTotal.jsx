function CartTotal() {
	return (
		<>
			<div className="basis-1/3">
				<div className="md:bg-[#F9F1E7] px-4 py-6 rounded-lg">
					<h3 className="text-center hidden">Cart Totals</h3>
					<div className="flex justify-between px-2">
						<p className="text-base text-left font-semibold">Cart Totals</p>
						<p className="text-base">999 Baht</p>
					</div>
					<div className="flex justify-between px-2">
						<p className="text-base text-left font-semibold">7% Tax</p>
						<p className="text-base">70 Baht</p>
					</div>
					<div className="flex justify-between px-2">
						<p className="text-base font-semibold">Delivery</p>
						<p className="text-base">0 Baht</p>
					</div>
					<br />
					<hr className="pt-4" />
					<div className="flex justify-between px-2">
						<p className="text-base font-semibold">Total</p>
						<p className="text-base">1069 Baht</p>
					</div>
					<div className="flex justify-center pt-6">
						<button className="bg-orange-600 md:bg-[#B99470] text-white rounded-md text-base px-4 py-2">
							Check Out
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default CartTotal;
