import DashChangePage from "../../components/dashboard/DashChangePage";
import DashOrderSummary from "../../components/dashboard/DashOrderSummary";
import DashOrderTable from "../../components/dashboard/DashOrderTable";

export default function DashOrderPage() {
	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<h4>Order Summary</h4>

			<DashOrderSummary />

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-316px)] flex flex-col justify-between">
				<div className="flex flex-col gap-4">
					<nav className="flex justify-between items-center border-b">
						<h4>Order Tables</h4>
						<ul className="flex">
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Pending
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Confirmed
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Processing
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Picked
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Shipped
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Delivered
							</li>
							<li className="border-b-2 border-white hover:border-green px-4 pb-2 pt-5">
								Cancelled
							</li>
						</ul>
					</nav>
					<div className="flex justify-between items-center">
						<input
							type="text"
							placeholder="Search Order Id"
							className="border px-4 py-2 rounded-lg"
						/>

						<div className="flex gap-6">
							<button className="py-1 px-4 border border-green hover:bg-green hover:text-white rounded-lg">
								Filter
							</button>
							<button className="py-1 px-4 border border-green hover:bg-green hover:text-white rounded-lg">
								Filter
							</button>
							<button className="py-1 px-4 border border-green hover:bg-green hover:text-white rounded-lg">
								Filter
							</button>
							<button className="py-1 px-4 border border-green hover:bg-green hover:text-white rounded-lg">
								Filter
							</button>
						</div>
					</div>
					{/* shadow-[0px_-10px_10px_-5px_rgb(250,250,250)] */}
					<table className="w-full rounded-lg">
						<thead className="border-b">
							<tr>
								<th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th>
								<th>Order Id</th>
								<th>Created</th>
								<th>Customer</th>
								<th>Total</th>
								<th>Profit</th>
								<th>Status</th>
								<th className=" w-1/12"></th>
							</tr>
						</thead>
						<tbody>
							{/* {productList.map((product) => ( */}
							<DashOrderTable
							// key={product._id}
							// product={product}
							// setProductList={setProductList}
							// handleChange={handleChange}
							/>
							{/* ))} */}
							<DashOrderTable />
							<DashOrderTable />
							<DashOrderTable />
						</tbody>
					</table>
				</div>

				<DashChangePage />
			</section>
		</div>
	);
}
