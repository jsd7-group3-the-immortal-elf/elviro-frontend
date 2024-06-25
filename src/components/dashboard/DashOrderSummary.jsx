import PropTypes from "prop-types";

export default function DashOrderSummary() {
	return (
		<section className="bg-green rounded-lg w-full flex flex-col justify-between items-end p-2 text-white h-32">
			<select name="" className="w-fit text-center text-sm bg-transparent">
				<option value="" className="bg-white text-neutral-800">
					All time
				</option>
				<option value="" className="bg-white text-neutral-800">
					Last Year
				</option>
				<option value="" className="bg-white text-neutral-800">
					This Year
				</option>
				<option value="" className="bg-white text-neutral-800">
					Last Month
				</option>
				<option value="" className="bg-white text-neutral-800">
					This Month
				</option>
			</select>
			<table className="w-full text-center">
				<thead className="text-sm">
					<tr>
						<th>All Order</th>
						<th>Pending</th>
						<th>Confirmed</th>
						<th>Processing</th>
						<th>Picked</th>
						<th>Shipped</th>
						<th>Delivered</th>
						<th>Cancelled</th>
					</tr>
				</thead>
				<tbody className="font-medium">
					<tr>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

DashOrderSummary.propTypes = {
	productList: PropTypes.array,
};
