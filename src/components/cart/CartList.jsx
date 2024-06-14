function CartList() {
	return (
		<>
			<section className="px-8" id="cart_item">
				<div className="">
					<table className="table-auto w-full text-center">
						<thead className="bg-[#DEAC80]">
							<tr>
								<th className=""></th>
								<th>Product</th>
								<th>Price</th>
								<th>Quanlity</th>
								<th>Subtatal</th>
								<th className=""></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<picture>
										<img
											className="py-1"
											src="./public/productcart-mockup.png"
										/>
									</picture>
								</td>
								<td>PÄRUP sofa</td>
								<td>999 Baht</td>
								<td className="bg-slate-200">1</td>
								<td>999 Baht</td>
								<td>
									<i className="fa-solid fa-trash"></i>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<div className="flex md:hidden">
						<picture>
							<img className="w-1/2" src="images/productcart-mockup.png" />
						</picture>
						<div className="px-2 py-8 bg-[#F4F4F4]">
							<h3>PÄRUP sofa</h3>
							<p>Description</p>
							<h3>THB 999</h3>
							<div className="flex justify-between items-center">
								<p>
									-<span className="px-2 py-1 border-2 border-black">1</span>+
								</p>
								<i className="fa-solid fa-trash text-xl"></i>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default CartList;
