import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { thCurrency, thDateTime } from "../../utils/format";
import axiosInstance from "../../utils/axiosInstance";
// import DashChangePage from "../../components/dashboard/DashChangePage";

export default function DashOrderViewPage({ reload, setReload }) {
	// const navigate = useNavigate();
	const [order, setOrder] = useState({});
	const { id } = useParams();

	async function getOrder(id) {
		try {
			const response = await axiosInstance.get(`/orders/${id}`);
			const { data } = await response.data;

			console.log(data);
			setOrder(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	async function editOrder(id, field) {
		try {
			await axiosInstance.patch(`/orders/${id}`, field);

			setReload(!reload);
		} catch (error) {
			console.log("Failed to edit data:", error);
		}
	}

	// async function handleChange(e) {
	// 	const { name, value } = e.target;
	// 	const field = { orderDetail: [{ [name]: value }] };
	// 	await editOrder(id, field);
	// }

	async function handleStatus(e) {
		const { name, value } = e.target;
		const field = { [name]: value, orderDetail: { [name]: value } };
		await editOrder(id, field);
	}

	// async function handleEdit() {
	// 	navigate("/dashboard/order");
	// }

	useEffect(() => {
		window.scrollTo(0, 0);
		getOrder(id);
	}, [id, reload]);

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6">
			<section className="flex items-center justify-between">
				<div>
					<h4>Order Number : {order._id}</h4>
					<p>Order Date : {thDateTime(order.createOn)}</p>
					{/* <p>Tracking ID : 12jio121</p> */}
				</div>
				<div className="flex gap-4">
					<button
						name="status"
						value="Delivered"
						onClick={handleStatus}
						className="bg-green rounded-lg text-white px-4 py-2 hover:bg-darkgreen"
					>
						Mark as Complete
					</button>
					<button
						name="status"
						value="Cancelled"
						onClick={handleStatus}
						className="bg-red-400 rounded-lg text-white px-4 py-2 hover:bg-red-600"
					>
						Cancel Order
					</button>
				</div>
			</section>

			<section className="flex h-32 gap-6">
				<div className="flex flex-col bg-white rounded-lg w-1/3 justify-around px-4 py-2">
					<div className="flex gap-4 items-center">
						<img
							src={order?.profile?.customerImage}
							alt={order?.profile?.firstName}
							className="aspect-square w-1/12 rounded-lg"
						/>
						<p>
							{order?.profile?.firstName} {order?.profile?.lastName}
						</p>
					</div>
					<p>Phone : {order?.profile?.phone}</p>
					<p>Email : {order?.profile?.email}</p>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-1/3 gap-2 px-4 py-2">
					<p>
						Address : {order?.address?.address}, {order?.address?.province},{" "}
						{order?.address?.district}, {order?.address?.subDistrict},{" "}
						{order?.address?.postalCode}
					</p>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-1/3 justify-around gap-2 px-4 py-2">
					<p>Payment Method : {order.payment}</p>
					<p>Total Price : {thCurrency(order.totalPrice)}</p>
					<p>Profit : {thCurrency(order.totalPrice - order.totalCost)}</p>
				</div>
			</section>

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-340px)] flex flex-col justify-between">
				<div>
					<div className="flex justify-between mb-3">
						<h4>Item : {order?.orderDetail?.length}</h4>
						<h4>
							Status :{" "}
							<select
								name="status"
								value={order.status}
								onChange={handleStatus}
							>
								<option value="Pending">Pending</option>
								<option value="Confirmed">Confirmed</option>
								<option value="Processing">Processing</option>
								<option value="Picked">Picked</option>
								<option value="Shipped">Shipped</option>
								<option value="Delivered">Delivered</option>
								<option value="Cancelled">Cancelled</option>
							</select>
						</h4>
					</div>
					<table className="w-full">
						<thead className="border-y">
							<tr>
								{/* <th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th> */}
								<th></th>
								<th className="py-2">Product Name</th>
								<th>Unit Price</th>
								<th>Quantity</th>
								<th>Order Total</th>
								<th>Profit</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{!order.productInfo ? (
								<tr className="text-center">
									<td colSpan={7} className="p-8">
										Don&apos;t have any product
									</td>
								</tr>
							) : (
								order?.productInfo?.map((product, i) => {
									return (
										<tr key={i}>
											{/* <th className="text-white w-5">
											<input
												type="checkbox"
												name=""
												id=""
												className="accent-green w-4 h-4 m-3 "
											/>
										</th> */}
											<th>
												<div className="h-10 w-10 flex justify-center items-center">
													<img
														src={product.productImage}
														alt={product.productName}
														className="aspect-square rounded-md"
													/>
												</div>
											</th>
											<th className="py-2">{product.productName}</th>
											<th>{thCurrency(product.price)}</th>
											<th>{order?.orderDetail[i]?.quantity}</th>
											<th>
												{thCurrency(
													order?.orderDetail[i]?.quantity * product.price
												)}
											</th>
											<th>
												{thCurrency(
													(product.price - product.cost) *
														order?.orderDetail[i]?.quantity
												)}
												{/* <select
												key={i}
												name="status"
												value={order.orderDetail.status}
												onChange={handleChange}
											>
												<option value="Pending">Pending</option>
												<option value="Confirmed">Confirmed</option>
												<option value="Processing">Processing</option>
												<option value="Picked">Picked</option>
												<option value="Shipped">Shipped</option>
												<option value="Delivered">Delivered</option>
												<option value="Cancelled">Cancelled</option>
											</select> */}
											</th>
											<th>
												<Link
													to={`/dashboard/product/${product._id}`}
													className="border border-green hover:bg-green hover:text-white px-3 py-1 rounded-xl"
												>
													View
												</Link>
											</th>
										</tr>
									);
								})
							)}
						</tbody>
					</table>
				</div>

				{/* <DashChangePage /> */}
			</section>
		</div>
	);
}

DashOrderViewPage.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
