import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DashChangePage from "../../components/dashboard/DashChangePage";

export default function DashProductViewPage() {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	async function getProduct(id) {
		try {
			const response = await axios.get(
				"https://store-crud.onrender.com/api/product/" + id
			);
			const data = await response.data;
			setProduct(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function deleteProduct() {
		try {
			await axios.delete("https://store-crud.onrender.com/api/product/" + id);
			location.href = "http://localhost:5173/dashboard/product";
		} catch (error) {
			console.error("Failed to delete data:", error);
		}
	}

	useEffect(() => {
		getProduct(id);
	}, [id]);

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<section className="flex items-center justify-between">
				<div>
					<h3>{product.name}</h3>
					<p>Product URL : {product._id}</p>
				</div>
				<div className="flex gap-4">
					<Link
						to={`/dashboard/product/edit-product/${product._id}`}
						className="bg-green rounded-lg text-white px-4 py-2 hover:bg-darkgreen"
					>
						Edit Product
					</Link>
					<button className="border border-red-400 rounded-lg px-4 py-2 hover:bg-red-100">
						Unpublish Product
					</button>
					<button
						onClick={() => deleteProduct(id)}
						className="bg-red-400 rounded-lg text-white px-4 py-2 hover:bg-red-600"
					>
						Delete Product
					</button>
				</div>
			</section>

			<section className="flex h-32 gap-6">
				<div className="rounded-lg aspect-square overflow-hidden w-1/2">
					<img src={product.image} alt={product.name} className="h-full" />
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/2">Price</th>
								<th className="w-1/2">In-Stock</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>{product.price}</td>
								<td>{product.quantity}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th>Total Order</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>฿12300</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/2">View</th>
								<th className="w-1/2">Favourite</th>
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

			<section className="flex flex-col h-32 bg-white rounded-lg w-full justify-between items-end p-2">
				<select
					name=""
					id=""
					className="w-fit text-center text-sm bg-transparent"
				>
					<option value="">All time</option>
					<option value="">Last Year</option>
					<option value="">This Year</option>
					<option value="">Last Month</option>
					<option value="">This Month</option>
				</select>
				<table className="w-full text-center">
					<thead className="text-sm">
						<tr>
							<th className="w-[calc(100%/8)]">All Order</th>
							<th className="w-[calc(100%/8)]">Pending</th>
							<th className="w-[calc(100%/8)]">Confirming</th>
							<th className="w-[calc(100%/8)]">Processing</th>
							<th className="w-[calc(100%/8)]">Picked</th>
							<th className="w-[calc(100%/8)]">Shipped</th>
							<th className="w-[calc(100%/8)]">Delivered</th>
							<th className="w-[calc(100%/8)]">Cancelled</th>
						</tr>
					</thead>
					<tbody className="font-medium">
						<tr>
							<td>{6 + 5 + 4 + 3 + 2 + 1}</td>
							<td>6</td>
							<td>5</td>
							<td>4</td>
							<td>3</td>
							<td>2</td>
							<td>1</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-472px)] flex flex-col justify-between">
				<div>
					<h4 className="mb-3">Purchases</h4>
					<table className="w-full">
						<thead className="border-y">
							<tr>
								<th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th>
								<th>Order Date</th>
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
								<th>12 Aug 2022 - 12:25 am</th>
								<th>12400</th>
								<th>1</th>
								<th>12400</th>
								<th>Complete</th>
							</tr>
						</tbody>
					</table>
				</div>

				<DashChangePage />
			</section>
		</div>
	);
}
