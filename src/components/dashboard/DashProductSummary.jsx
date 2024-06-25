import PropTypes from "prop-types";

export default function DashProductSummary({ productList }) {
	return (
		<section className="flex gap-6 h-32">
			<div className="bg-green rounded-lg w-1/2 flex items-end p-2 text-white">
				<table className="w-full text-center">
					<thead className="text-sm">
						<tr>
							<th className="w-1/3">All Product</th>
							<th className="w-1/3">Published</th>
							<th className="w-1/3">Unpublished</th>
						</tr>
					</thead>
					<tbody className="font-medium">
						<tr>
							<td>{productList.length}</td>
							<td>{productList.length}</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="bg-white rounded-lg w-1/2 flex items-end p-2">
				<table className="w-full text-center">
					<thead className="text-sm">
						<tr>
							<th className="w-1/2">Low Stock Alert</th>
							<th className="w-1/2">Expired</th>
						</tr>
					</thead>
					<tbody className="font-medium">
						<tr>
							<td className="text-red-500">
								{productList.filter((product) => product.quantity < 10).length}
							</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}

DashProductSummary.propTypes = {
	productList: PropTypes.array,
};
