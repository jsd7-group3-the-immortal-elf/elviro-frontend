// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import DashChangePage from "../../components/dashboard/DashChangePage";
import customerPic from "/images/contact.png";

export default function DashProductViewPage() {
	// const [product, setProduct] = useState({});

	// const { id } = useParams();

	// async function getProduct(id) {
	// 	try {
	// 		const response = await axios.get(
	// 			"https://store-crud.onrender.com/api/product/" + id
	// 		);
	// 		const data = await response.data;
	// 		setProduct(data);
	// 	} catch (error) {
	// 		console.error("Failed to get data:", error);
	// 	}
	// }

	// async function deleteProduct() {
	// 	try {
	// 		await axios.delete("https://store-crud.onrender.com/api/product/" + id);
	// 		location.href = "http://localhost:5173/dashboard/product";
	// 	} catch (error) {
	// 		console.error("Failed to delete data:", error);
	// 	}
	// }

	// useEffect(() => {
	// 	getProduct(id);
	// }, [id]);

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6">
			<section className="flex items-center justify-between">
				<div>
					<h4>Order Number : #12345</h4>
					<p>Order Date : 23 Jun 2024</p>
					<p>Tracking ID : 12jio121</p>
				</div>
				<div className="flex gap-4">
					<button
						// to={`/dashboard/product/edit-product/${product._id}`}
						className="bg-green rounded-lg text-white px-4 py-2 hover:bg-darkgreen"
					>
						Mark as Complete
					</button>
					<button
						// onClick={() => deleteProduct(id)}
						className="bg-red-400 rounded-lg text-white px-4 py-2 hover:bg-red-600"
					>
						Cancel Order
					</button>
				</div>
			</section>

			<section className="flex h-32 gap-6">
				<div className="flex flex-col bg-white rounded-lg w-3/5 justify-between p-2">
					<div className="flex ml-2 justify-between">
						<div className="flex gap-4 items-center">
							<img
								src={customerPic}
								alt=""
								className="aspect-square w-1/12 rounded-lg"
							/>
							<p>John Doe</p>
						</div>
						<select className="w-fit">
							<option>Pending</option>
							<option>Confirmed</option>
							<option>Processing</option>
							<option>Picked</option>
							<option>Shipped</option>
							<option>Delivered</option>
							<option>Cancelled</option>
						</select>
					</div>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/5">Phone</th>
								<th className="w-1/5">E-mail</th>
								<th className="w-1/5">Payment Method</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>081 234 5678</td>
								<td>example@example.com</td>
								<td>aa</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-2/5 justify-end p-2">
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th>Address</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>111/111 nakhon ratchasima, nakhon ratchasima, 12345</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-1/5 justify-end p-2">
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/2">Total Price</th>
								<th className="w-1/2">Profit</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>13046</td>
								<td>360</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-364px)] flex flex-col justify-between">
				<div>
					<h4 className="mb-3">Item : 3</h4>
					<table className="w-full">
						<thead className="border-y">
							<tr>
								<th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th>
								<th></th>
								<th>Product Name</th>
								<th>Unit Price</th>
								<th>Quantity</th>
								<th>Order Total</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th>
								<th>
									<div className="h-10 w-10 flex justify-center items-center">
										<img
											src={customerPic}
											alt="mock"
											className="aspect-square rounded-md"
										/>
									</div>
								</th>
								<th>Sofa</th>
								<th>12400</th>
								<th>1</th>
								<th>12400</th>
								<th>
									<select name="orederStatus">
										<option value="Pending">Pending</option>
										<option value="Confirmed">Confirmed</option>
										<option value="Processing">Processing</option>
										<option value="Picked">Picked</option>
										<option value="Shipped">Shipped</option>
										<option value="Delivered">Delivered</option>
										<option value="Cancelled">Cancelled</option>
									</select>
								</th>
							</tr>
						</tbody>
					</table>
				</div>

				{/* <DashChangePage /> */}
			</section>
		</div>
	);
}
