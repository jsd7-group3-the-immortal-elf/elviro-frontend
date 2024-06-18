import DashChangePage from "../../components/dashboard/DashChangePage";
import DashProductSummary from "../../components/dashboard/DashProductSummary";
import DashProductItem from "../../components/dashboard/DashProductItem";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function DashProductPage() {
	const [productList, setProductList] = useState([]);

	async function getProduct() {
		try {
			const response = await axios.get(
				"https://store-crud.onrender.com/api/product/"
			);
			const data = await response.data;
			console.log(data);
			setProductList(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	useEffect(() => {
		getProduct();
	}, []);

	function handleChange(e, Id) {
		// setProductStatus(e.target.value);
		// setProductList((prev) => [{ ...prev, status: productStatus }]);
		const { name, value } = e.target;

		setProductList((prev) =>
			prev.map((item) => (item.id === Id ? { ...item, [name]: value } : item))
		);
	}

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 ">
			<h4>Product Summary</h4>

			<DashProductSummary />

			<section className="bg-white rounded-lg p-4 min-h-[calc(100vh-316px)]">
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
							<th>Action</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{productList.map((product) => (
							<DashProductItem
								key={product.id}
								product={product}
								setProductList={setProductList}
								handleChange={handleChange}
							/>
						))}
					</tbody>
				</table>

				<DashChangePage />
			</section>
		</div>
	);
}
