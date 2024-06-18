export default function DashProductSummary() {
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
							<td>350</td>
							<td>350</td>
							<td>350</td>
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
							<td>350</td>
							<td>350</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
