import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import DashChangePage from "../../components/dashboard/DashChangePage";
import customerPic from "/images/contact.png";

export default function DashOrderViewPage() {
	const navigate = useNavigate();
	const [order, setOrder] = useState({});
	const { id } = useParams();

	async function getOrder(id) {
		try {
			const response = await axiosInstance.get(`/orders/${id}`);
			const { data } = await response.data;
			console.log(data);
			setOrder(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function editOrder(id, field) {
		try {
			await axiosInstance.patch(`/orders/${id}`, field);
		} catch (error) {
			console.error("Failed to edit data:", error);
		}
	}

	async function handleEdit() {
		// const field = { isPublish: !order.isPublish };
		await editOrder(id, field);
		navigate("/dashboard/order");
	}

	useEffect(() => {
		getOrder(id);
	}, [id]);

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6">
			<section className="flex items-center justify-between">
				<div>
					<h4>Order Number : {order._id}</h4>
					<p>Order Date : {order.createOn}</p>
					{/* <p>Tracking ID : 12jio121</p> */}
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
								src={order.customerImage}
								alt=""
								className="aspect-square w-1/12 rounded-lg"
							/>
							<p>
								{order.firstName} {order.lastName}
							</p>
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
								<td>{order?.profile?.phone}</td>
								<td>{order?.profile?.email}</td>
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
								<td>{order?.address?.address}</td>
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
								<td>{order.totalPrice}</td>
								<td>{order.totalPrice - order.totalCost}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-364px)] flex flex-col justify-between">
				<div>
					<h4 className="mb-3">Item : {order.orderDetail.length}</h4>
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
							{order.productInfo.map((product, i) => {
								return (
									<tr key={i}>
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
													src={product.productImage}
													alt="mock"
													className="aspect-square rounded-md"
												/>
											</div>
										</th>
										<th>{product.productName}</th>
										<th>{product.price}</th>
										<th>{order?.orderDetail[i]?.quantity}</th>
										<th>{order?.orderDetail[i]?.quantity * product.price}</th>
										<th>
											<select name="status" value={order.status}>
												<option name="status" value="Pending">
													Pending
												</option>
												<option name="status" value="Confirmed">
													Confirmed
												</option>
												<option name="status" value="Processing">
													Processing
												</option>
												<option name="status" value="Picked">
													Picked
												</option>
												<option name="status" value="Shipped">
													Shipped
												</option>
												<option name="status" value="Delivered">
													Delivered
												</option>
												<option name="status" value="Cancelled">
													Cancelled
												</option>
											</select>
										</th>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				<DashChangePage />
			</section>
		</div>
	);
}
