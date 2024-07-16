import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { thCurrency } from "../../utils/format";

export default function DashProductTable({ product, handleChange }) {
	return (
		<tr key={product._id}>
			{/* <th className="text-white w-5">
				<input
					type="checkbox"
					name="checkbox"
					onChange={(e) => handleChange(e, product._id)}
					className="accent-green w-4 h-4 m-3 "
				/>
			</th> */}
			<th>
				<div className="h-10 w-10 flex justify-center items-center">
					<img
						src={product.productImage}
						alt={product.productName}
						className="aspect-square rounded-md"
					/>
				</div>
			</th>
			<th className="py-2">{product.productName}</th>
			<th>{product.rooms.join(", ")}</th>
			<th>{product.category}</th>
			<th>{thCurrency(product.price)}</th>
			<th className={`${product.stock <= 20 ? "text-red-500" : ""}`}>
				{product.stock}
			</th>
			{/* <th>{product.price * product.stock}</th> */}
			<th>
				<select
					name="isPublish"
					value={product.isPublish ? "Published" : "Unpublished"}
					onChange={(e) => handleChange(e, product._id)}
				>
					<option
						name="isPublish"
						value="Published"
						onChange={(e) => handleChange(e, product._id)}
					>
						Published
					</option>
					<option
						name="isPublish"
						value="Unpublished"
						onChange={(e) => handleChange(e, product._id)}
					>
						Unpublished
					</option>
				</select>
			</th>
			<th>
				<Link
					to={`/dashboard/product/${product._id}`}
					className="border border-green hover:bg-green hover:text-white px-3 py-1 rounded-xl"
				>
					View
				</Link>
			</th>
		</tr>
	);
}

DashProductTable.propTypes = {
	product: PropTypes.object,
	handleChange: PropTypes.func,
};
