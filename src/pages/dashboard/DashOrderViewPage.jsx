import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { thCurrency } from "../../utils/format";
import axiosInstance from "../../utils/axiosInstance";
import DashChangePage from "../../components/dashboard/DashChangePage";

export default function DashOrderViewPage(reload, setReload) {
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
			console.error("Failed to get data:", error);
		}
	}

	async function editOrder(id, field) {
		try {
			await axiosInstance.patch(`/orders/${id}`, field);

			setReload(!reload);
		} catch (error) {
			console.error("Failed to edit data:", error);
		}
	}

	async function handleChange(e) {
		const { name, value } = e.target;
		const field = { orderDetail: { [name]: value } };
		await editOrder(id, field);
	}

	// async function handleEdit() {
	// 	navigate("/dashboard/order");
	// }

	useEffect(() => {
		getOrder(id);
	}, [id, reload]);

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
				{/* <select className="w-fit">
							<option>Pending</option>
							<option>Confirmed</option>
							<option>Processing</option>
							<option>Picked</option>
							<option>Shipped</option>
							<option>Delivered</option>
							<option>Cancelled</option>
						</select> */}
				<div className="flex flex-col bg-white rounded-lg w-1/3 justify-around px-4 py-2">
					<div className="flex gap-4 items-center">
						<img
							src={order?.profile?.customerImage}
							alt=""
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

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-364px)] flex flex-col justify-between">
				<div>
					<h4 className="mb-3">Item : {order?.orderDetail?.length}</h4>
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
							{order?.productInfo?.map((product, i) => {
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
													alt={product.productName}
													className="aspect-square rounded-md"
												/>
											</div>
										</th>
										<th>{product.productName}</th>
										<th>{thCurrency(product.price)}</th>
										<th>{order?.orderDetail[i]?.quantity}</th>
										<th>
											{thCurrency(
												order?.orderDetail[i]?.quantity * product.price
											)}
										</th>
										<th>
											<select
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

DashOrderViewPage.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
