import { FaTrash } from "react-icons/fa";

function CartList() {
	const priceList = [
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "PÄRUP sofa",
			productQuanlity: "3",
			productPrice: "8999",
		},
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "VIMLE sofa",
			productQuanlity: "1",
			productPrice: "15999",
		},
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "GLOSTAD sofa",
			productQuanlity: "2",
			productPrice: "2999",
		},
	];

	return (
		<>
			<section className="px-8" id="cart_item">
				<div className="hidden md:block">
					<table className="table-auto w-full text-center">
						<thead className="bg-[#DEAC80]">
							<tr>
								<th className=" min-w-12 md:max-w-16 font-semibold"></th>
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
										<picture className="w-16 h-16 object-cover">
											<img
												src={product.productPicture}
												alt={product.productName}
											/>
										</picture>
									</td>
									<td>{product.productName}</td>
									<td>฿ {parseFloat(product.productPrice).toLocaleString()}</td>
									<td className="bg-slate-200">
										<button className="px-2">-</button>
										<span className="">{product.productQuanlity}</span>
										<button className="px-2">+</button>
									</td>
									<td>
										฿{" "}
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
				<div className="w-full px-4">
					<div className="grid grid-col-1 gap-2">
						{priceList.map((product, index) => (
							<div key={index} className="flex md:hidden">
								<picture className="flex w-full border-2 py">
									<img
										className="px-4"
										src={product.productPicture}
										alt={product.productName}
									/>
								</picture>
								<div className="w-full px-2 py-4 bg-[#F4F4F4]">
									<h3 className="text-base">{product.productName}</h3>
									<h3 className="text-base">
										฿ {parseFloat(product.productPrice).toLocaleString()}
									</h3>
									<div className="flex py-2 justify-between items-center">
										<p className="px-4">
											<button className="px-2">-</button>
											<span className="px-2 py-1 border-2 border-gray-500">
												{product.productQuanlity}
											</span>
											<button className="px-2">+</button>
										</p>
										<button className="px-2">
											<FaTrash />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
export default CartList;
