import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";
import DashChangePage from "../../components/dashboard/DashChangePage";
import DashOrderSummary from "../../components/dashboard/DashOrderSummary";
import DashOrderTable from "../../components/dashboard/DashOrderTable";

export default function DashOrderPage({ reload, setReload }) {
	const [orderList, setOrderList] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	async function getOrder() {
		try {
			const response = await axiosInstance.get("/orders");
			const { data } = await response.data;

			setOrderList(data);
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

	async function queryOrder(queryStr) {
		try {
			const response = await axiosInstance.get(`/orders${queryStr}`);
			const { data } = await response.data;

			setOrderList(data);
		} catch (error) {
			console.error("Failed to edit data:", error);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		getOrder();
	}, [reload]);

	function handleChange(e, orderId) {
		const { name, value } = e.target;

		setOrderList((prev) =>
			prev.map((item) =>
				item.id === orderId ? { ...item, [name]: value } : item
			)
		);

		if (name == "status") {
			const field = { [name]: value };
			editOrder(orderId, field);
		}
	}

	function handleSearch(e) {
		const { name, value } = e.target;
		setSearch(value);

		const filter = `?${name}=${value}`;
		if (value.length == 24) queryOrder(filter);
		setQuery("All");
	}

	function handleQuery(e) {
		const { name, value } = e.target;
		setQuery(value);
		setSearch("");

		if (value == "All") {
			return getOrder();
		}
		const filter = `?${name}=${value}`;
		queryOrder(filter);
	}

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<h4>Order Summary</h4>

			<DashOrderSummary orderList={orderList} />

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-316px)] flex flex-col justify-between">
				<div className="flex flex-col gap-4">
					<h4>Order Tables</h4>

					<div className="flex justify-between items-center border-b">
						<input
							type="text"
							placeholder="Search Order Id"
							className="border px-4 py-2 rounded-lg"
							name="search"
							value={search}
							onChange={handleSearch}
						/>
						<ul className="flex">
							<li>
								<button
									name="status"
									value="All"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "All" ? "border-green" : "border-white"}`}
								>
									All
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Pending"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Pending" ? "border-green" : "border-white"}`}
								>
									Pending
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Confirmed"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Confirmed" ? "border-green" : "border-white"}`}
								>
									Confirmed
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Processing"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Processing" ? "border-green" : "border-white"}`}
								>
									Processing
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Picked"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Picked" ? "border-green" : "border-white"}`}
								>
									Picked
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Shipped"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Shipped" ? "border-green" : "border-white"}`}
								>
									Shipped
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Delivered"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Delivered" ? "border-green" : "border-white"}`}
								>
									Delivered
								</button>
							</li>
							<li>
								<button
									name="status"
									value="Cancelled"
									onClick={handleQuery}
									className={`border-b-2 hover:border-green px-4 pb-2 pt-5
										${query == "Cancelled" ? "border-green" : "border-white"}`}
								>
									Cancelled
								</button>
							</li>
						</ul>
					</div>

					<table className="w-full rounded-lg table-auto">
						<thead className="border-b">
							<tr>
								{/* <th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th> */}
								<th>Order Id</th>
								<th>Created</th>
								<th>Customer</th>
								<th>Total</th>
								<th>Profit</th>
								<th>Status</th>
								<th className=" w-1/12"></th>
							</tr>
						</thead>
						{orderList.length == 0 ? (
							<tbody>
								<tr className="text-center">
									<td colSpan={7}>Not found order</td>
								</tr>
							</tbody>
						) : (
							<tbody>
								{orderList.map((order) => (
									<DashOrderTable
										key={order._id}
										order={order}
										handleChange={handleChange}
									/>
								))}
							</tbody>
						)}
					</table>
				</div>

				<DashChangePage />
			</section>
		</div>
	);
}

DashOrderPage.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
