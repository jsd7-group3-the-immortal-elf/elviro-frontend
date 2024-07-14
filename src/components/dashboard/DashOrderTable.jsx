import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import format from "../../utils/format";

export default function DashOrderTable({ order, handleChange }) {
	return (
		<tr key={order._id}>
			{/* <th className="text-white w-5">
				<input
					type="checkbox"
					name="checkbox"
					onChange={(e) => handleChange(e, order._id)}
					className="accent-green w-4 h-4 m-3 "
				/>
			</th> */}
			<th className="py-2">{order._id}</th>
			<th>{order.createOn}</th>
			<th>
				{order.firstName} {order.lastName}
			</th>
			<th>{format.thCurrency(order.totalPrice)}</th>
			<th>{format.thCurrency(order.totalPrice - order.totalCost)}</th>
			<th>
				<select
					name="status"
					value={order.status}
					onChange={(e) => handleChange(e, order._id)}
				>
					<option
						name="status"
						value="Pending"
						onChange={(e) => handleChange(e, order._id)}
					>
						Pending
					</option>
					<option
						name="status"
						value="Confirmed"
						onChange={(e) => handleChange(e, order._id)}
					>
						Confirmed
					</option>
					<option
						name="status"
						value="Processing"
						onChange={(e) => handleChange(e, order._id)}
					>
						Processing
					</option>
					<option
						name="status"
						value="Picked"
						onChange={(e) => handleChange(e, order._id)}
					>
						Picked
					</option>
					<option
						name="status"
						value="Shipped"
						onChange={(e) => handleChange(e, order._id)}
					>
						Shipped
					</option>
					<option
						name="status"
						value="Delivered"
						onChange={(e) => handleChange(e, order._id)}
					>
						Delivered
					</option>
					<option
						name="status"
						value="Cancelled"
						onChange={(e) => handleChange(e, order._id)}
					>
						Cancelled
					</option>
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
		</tr>
	);
}

DashOrderTable.propTypes = {
	order: PropTypes.object,
	handleChange: PropTypes.func,
};
