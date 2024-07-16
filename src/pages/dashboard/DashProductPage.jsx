import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";
// import DashChangePage from "../../components/dashboard/DashChangePage";
import DashProductSummary from "../../components/dashboard/DashProductSummary";
import DashProductTable from "../../components/dashboard/DashProductTable";

export default function DashProductPage({ reload, setReload }) {
	const [productList, setProductList] = useState([]);

	async function getProduct() {
		try {
			const response = await axiosInstance.get("/products");
			const { data } = await response.data;
			setProductList(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	async function editProduct(id, field) {
		try {
			await axiosInstance.patch(`/products/${id}`, field);

			setReload(!reload);
		} catch (error) {
			console.log("Failed to edit data:", error);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		getProduct();
	}, [reload]);

	function handleChange(e, productId) {
		const { name, value } = e.target;

		setProductList((prev) =>
			prev.map((item) =>
				item.id === productId ? { ...item, [name]: value } : item
			)
		);

		if (name == "isPublish") {
			const bool = value == "Published" ? true : false;
			const field = { [name]: bool };
			editProduct(productId, field);
		}
	}

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<h4>Product Summary</h4>

			<DashProductSummary productList={productList} />

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-316px)] flex flex-col justify-between">
				<div>
					<h4 className="mb-3">Product Items</h4>
					<table className="w-full">
						<thead className="border-y">
							<tr>
								{/* <th className="text-white w-5">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-green w-4 h-4 m-3 "
									/>
								</th> */}
								<th></th>
								<th className="py-2">Product Name</th>
								<th>Room</th>
								<th>Category</th>
								<th>Unit Price</th>
								<th>In-Stock</th>
								{/* <th>Total Value</th> */}
								<th>Action</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{!productList ? (
								<tr className="text-center">
									<td colSpan={8} className="p-8">
										Don&apos;t have any product
									</td>
								</tr>
							) : (
								productList.map((product) => (
									<DashProductTable
										key={product._id}
										product={product}
										handleChange={handleChange}
									/>
								))
							)}
						</tbody>
					</table>
				</div>

				{/* <DashChangePage /> */}
			</section>
		</div>
	);
}

DashProductPage.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
