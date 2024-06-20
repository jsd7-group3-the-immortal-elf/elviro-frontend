import { FaTrash } from "react-icons/fa";

function CartList() {
	const priceList = [
		{
			productPicture: "/public/images/mockup-sofa.png",
			productName: "PÄRUP sofa",
			productQuanlity: "3",
			productPrice: "8999",
		},
		{
			productPicture: "/public/images/mockup-sofa.png",
			productName: "VIMLE sofa",
			productQuanlity: "1",
			productPrice: "15999",
		},
		{
			productPicture: "/public/images/mockup-sofa.png",
			productName: "GLOSTAD sofa",
			productQuanlity: "2",
			productPrice: "2999",
		},
	];

	return (
		<>
			<section className="px-8" id="cart_item">
				<div className="">
					<table className="table-auto w-full text-center">
						<thead className="bg-[#DEAC80]">
							<tr>
								<th className="font-semibold"></th>
								<th className="font-semibold">Product</th>
								<th className="font-semibold">Price</th>
								<th className="font-semibold">Quanlity</th>
								<th className="font-semibold">Subtotal</th>
								<th className="font-semibold"></th>
							</tr>
						</thead>
						<tbody>
							{priceList.map((product, index) => (
								<tr key={index}>
									<td>
										<picture>
											<img
												className="py-2 w-24"
												src={product.productPicture}
												alt={product.productName}
											/>
										</picture>
									</td>
									<td>{product.productName}</td>
									<td>{parseFloat(product.productPrice).toLocaleString()}</td>
									<td className="bg-slate-200">{product.productQuanlity}</td>
									<td>
										{parseFloat(
											product.productQuanlity * product.productPrice
										).toLocaleString()}
									</td>
									<td className="w-24">
										<button>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div>
					<div className="flex md:hidden">
						<picture>
							<img className="w-1/2" src="/public/images/mockup-sofa.png" />
						</picture>
						<div className="px-2 py-8 bg-[#F4F4F4]">
							<h3>PÄRUP sofa</h3>
							<p>Description</p>
							<h3>THB 999</h3>
							<div className="flex justify-between items-center">
								<p>
									-<span className="px-2 py-1 border-2 border-black">1</span>+
								</p>
								<FaTrash />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default CartList;
