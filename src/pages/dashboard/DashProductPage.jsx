import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DashProductPage() {
	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<h4>Product Summary</h4>

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

			<section className="bg-white rounded-lg p-4">
				<h4 className="mb-3">Product Items</h4>
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
							<th>Product Name</th>
							<th>Room</th>
							<th>Category</th>
							<th>Unit Price</th>
							<th>In-Stock</th>
							<th>Total Value</th>
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
							<th>Product Name</th>
							<th>Room</th>
							<th>Category</th>
							<th>Unit Price</th>
							<th>In-Stock</th>
							<th>Total Value</th>
							<th>
								<select name="" id="">
									<option value="published">Published</option>
									<option value="unpublished">Unpublished</option>
								</select>
							</th>
						</tr>
					</tbody>
				</table>
				<footer className="flex justify-between border-t pt-2">
					<div className="flex gap-6">
						<select name="" id="" className="bg-neutral-100 rounded-md px-2">
							<option value="">10</option>
							<option value="">20</option>
						</select>
						<p>Items per page</p>
						<p>1-10 of 200 items</p>
					</div>
					<div className="flex items-center gap-6">
						<select name="" id="" className="bg-neutral-100 rounded-md px-2">
							<option value="">1</option>
							<option value="">2</option>
							<option value="">3</option>
						</select>
						of 44 pages
						<FaChevronLeft />
						<FaChevronRight />
					</div>
				</footer>
			</section>
		</div>
	);
}
