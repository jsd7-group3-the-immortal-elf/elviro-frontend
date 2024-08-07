import PropTypes from "prop-types";

export default function DashProductSummary({ productList }) {
	return (
		<section className="flex gap-6 h-32">
			<div className="bg-green rounded-lg w-full flex items-end p-2 text-white">
				<table className="w-full text-center">
					<thead className="text-sm">
						<tr>
							<th className="w-1/4">All Product</th>
							<th className="w-1/4">Published</th>
							<th className="w-1/4">Unpublished</th>
							<th className="w-1/4">Low Stock Alert</th>
						</tr>
					</thead>
					<tbody className="font-medium">
						<tr>
							<td>{productList.length}</td>
							<td>
								{
									productList.filter((product) => product.isPublish == true)
										.length
								}
							</td>
							<td>
								{
									productList.filter((product) => product.isPublish == false)
										.length
								}
							</td>
							<td className="text-red-500">
								{productList.filter((product) => product.stock <= 20).length}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* <div className="bg-white rounded-lg w-1/2 flex items-end p-2">
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
								{productList.filter((product) => product.stock <= 20).length}
							</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</div> */}
		</section>
	);
}

DashProductSummary.propTypes = {
	productList: PropTypes.array,
};
