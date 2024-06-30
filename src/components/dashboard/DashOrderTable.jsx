import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useState } from "react";

export default function DashOrderTable() {
	// const [productStatus, setProductStatus] = useState(product.status);
	const order = {
		_id: 1234,
	};
	return (
		<tr>
			<th className="text-white w-5">
				<input
					type="checkbox"
					name="checkbox"
					// onChange={(e) => handleChange(e, order._id)}
					className="accent-green w-4 h-4 m-3 "
				/>
			</th>
			<th>OID-1234</th>
			<th>10 min ago</th>
			<th>John Doe</th>
			<th>12000</th>
			<th>2000</th>
			<th>
				<select
					name="orederStatus"
					// onChange={(e) => handleChange(e, order._id)}
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
			<th>
				<Link
					to={`/dashboard/order/${order._id}`}
					className="border border-green hover:bg-green hover:text-white px-3 py-1 rounded-xl"
				>
					View
				</Link>
			</th>

			{/* <th>
				<p
					className={`rounded-md  ${
						product.status == "Published" ? "bg-lightgreen/50" : "bg-orange-100"
					}`}
				>
					{product.status}
				</p>
			</th> */}
		</tr>
	);
}

// DashProductTable.propTypes = {
// 	product: PropTypes.object,
// 	handleChange: PropTypes.func,
// };
