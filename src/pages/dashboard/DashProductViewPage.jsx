import DashChangePage from "../../components/dashboard/DashChangePage";
import mockPic from "/images/mockup-living.jpg";

export default function DashProductViewPage() {
	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<section className="flex items-center justify-between">
				<div>
					<h3>Parup Sofa</h3>
					<p>Product URL : this-is/product-link</p>
				</div>
				<div className="flex gap-4">
					<button className="bg-green rounded-lg text-white px-4 py-2">
						Edit Product
					</button>
					<button className="bg-red-400 rounded-lg text-white px-4 py-2">
						Unpublish Product
					</button>
				</div>
			</section>

			<section className="flex h-32 gap-6">
				<div className="rounded-lg aspect-square overflow-hidden w-1/2">
					<img src={mockPic} alt="Sofa" className="h-full" />
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/2">Price</th>
								<th className="w-1/2">In-Stock</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>12300</td>
								<td>60</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th>Total Order</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>฿12300</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col bg-white rounded-lg w-full justify-between items-end p-2">
					<select name="" id="" className="w-fit text-center text-sm">
						<option value="">All time</option>
						<option value="">Last Year</option>
						<option value="">This Year</option>
						<option value="">Last Month</option>
						<option value="">This Month</option>
					</select>
					<table className="w-full text-center">
						<thead className="text-sm">
							<tr>
								<th className="w-1/2">View</th>
								<th className="w-1/2">Favourite</th>
							</tr>
						</thead>
						<tbody className="font-medium">
							<tr>
								<td>13046</td>
								<td>360</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="flex flex-col h-32 bg-white rounded-lg w-full justify-between items-end p-2">
				<select
					name=""
					id=""
					className="w-fit text-center text-sm bg-transparent"
				>
					<option value="">All time</option>
					<option value="">Last Year</option>
					<option value="">This Year</option>
					<option value="">Last Month</option>
					<option value="">This Month</option>
				</select>
				<table className="w-full text-center">
					<thead className="text-sm">
						<tr>
							<th className="w-[calc(100%/8)]">All Order</th>
							<th className="w-[calc(100%/8)]">Pending</th>
							<th className="w-[calc(100%/8)]">Confirming</th>
							<th className="w-[calc(100%/8)]">Processing</th>
							<th className="w-[calc(100%/8)]">Picked</th>
							<th className="w-[calc(100%/8)]">Shipped</th>
							<th className="w-[calc(100%/8)]">Delivered</th>
							<th className="w-[calc(100%/8)]">Cancelled</th>
						</tr>
					</thead>
					<tbody className="font-medium">
						<tr>
							<td>{6 + 5 + 4 + 3 + 2 + 1}</td>
							<td>6</td>
							<td>5</td>
							<td>4</td>
							<td>3</td>
							<td>2</td>
							<td>1</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className="bg-white rounded-lg p-4">
				<h4 className="mb-3">Purchases</h4>
				<table className="w-full">
					<thead className="border-y">
						<tr>
							<th className="text-white w-5">
								<input
									type="checkbox"
									name=""
									id=""
									className="accent-green w-4 h-4 m-3 "
								/>
							</th>
							<th>Order Date</th>
							<th>Unit Price</th>
							<th>Quantity</th>
							<th>Order Total</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-white w-5">
								<input
									type="checkbox"
									name=""
									id=""
									className="accent-green w-4 h-4 m-3 "
								/>
							</th>
							<th>12 Aug 2022 - 12:25 am</th>
							<th>12400</th>
							<th>1</th>
							<th>12400</th>
							<th>
								<select name="" id="" className="w-fit">
									<option value="published">Published</option>
									<option value="unpublished">Unpublished</option>
								</select>
							</th>
						</tr>
					</tbody>
				</table>

				<DashChangePage />
			</section>
		</div>
	);
}
