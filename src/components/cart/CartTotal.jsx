function CartTotal({ totalPrice }) {
	const delivery = 850;
	const vat = 0.07;
	//const subtotal = 1000;
	const tax = totalPrice * vat;
	const total = totalPrice + tax + delivery;
	return (
		<div className="w-full md:basis-1/3">
			<div className="bg-[#F9F1E7] p-4 rounded-lg">
				<p className="text-2xl md:text-3xl text-center font-semibold">
					Cart Totals
				</p>
				<table className="min-w-full divide-y divide-gray-200 mt-4">
					<tbody className="divide-y divide-gray-200">
						<tr className="bg-[#F9F1E7]">
							<td className="font-semibold">Subtotal</td>
							<td className="text-right">฿ {totalPrice.toLocaleString()}</td>
						</tr>
						<tr className="bg-[#F9F1E7]">
							<td className="font-semibold">7% Tax</td>
							<td className="text-right">฿ {tax.toLocaleString()}</td>
						</tr>
						<tr className="bg-[#F9F1E7]">
							<td className="font-semibold">Delivery</td>
							<td className="text-right">฿ {delivery.toLocaleString()}</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<div className="flex justify-between my-4">
					<p className="font-semibold">Total</p>
					<p>฿ {total.toLocaleString()}</p>
				</div>
				<div className="flex justify-center">
					<button className="bg-orange-500 text-white rounded-md px-4 py-2">
						Check Out
					</button>
				</div>
			</div>
		</div>
	);
}
export default CartTotal;
