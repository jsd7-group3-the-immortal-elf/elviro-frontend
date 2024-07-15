import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import DashChangePage from "../../components/dashboard/DashChangePage";

export default function DashProductViewPage() {
	const navigate = useNavigate();
	const [product, setProduct] = useState({});
	const { id } = useParams();

	async function getProduct(id) {
		try {
			const response = await axiosInstance.get(`/products/${id}`);
			const { data } = await response.data;
			setProduct(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function deleteProduct(id) {
		try {
			await axiosInstance.delete(`/products/${id}`);
			navigate("/dashboard/product");
		} catch (error) {
			console.error("Failed to delete data:", error);
		}
	}

	async function editProduct(id, field) {
		try {
			await axiosInstance.patch(`/products/${id}`, field);
		} catch (error) {
			console.error("Failed to edit data:", error);
		}
	}

	async function handleEdit() {
		const field = { isPublish: !product.isPublish };
		await editProduct(id, field);
		navigate("/dashboard/product");
	}

	useEffect(() => {
		getProduct(id);
	}, [id]);

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6">
			<section className="flex items-center justify-between">
				<div>
					<h3>{product.productName}</h3>
					<p>Product URL : {product._id}</p>
				</div>
				<div className="flex gap-4">
					<Link
						to={`/dashboard/product/edit/${product._id}`}
						className="bg-green rounded-lg text-white px-4 py-2 hover:bg-darkgreen"
					>
						Edit Product
					</Link>
					<button
						onClick={handleEdit}
						className={`border rounded-lg px-4 py-2 ${
							product.isPublish
								? "border-red-400 hover:bg-red-100"
								: "border-green hover:bg-lightgreen/40"
						} `}
					>
						{product.isPublish ? "Unpublished Product" : "Publish Product"}
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
				<div className="aspect-square">
					<img
						src={product.productImage}
						alt={product.productName}
						className="aspect-square rounded-lg h-full"
					/>
				</div>

				<div className="flex flex-col bg-green text-white rounded-lg w-1/4 justify-around items-start px-4 py-2">
					{/* <select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select> */}

					<p>Price : {product.price}</p>
					<p>In-Stock : {product.stock}</p>
					<p>Total Order : {product.price}</p>
				</div>

				<section className="flex flex-col h-32 bg-white rounded-lg w-full justify-between items-end p-2">
					<p className="btn rounded-full text-sm hover:bg-neutral-200">
						All time
					</p>
					{/* <select
						name=""
						id=""
						className="w-fit text-center text-sm bg-transparent"
					>
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select> */}
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
			</section>

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-344px)] flex flex-col justify-between">
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
