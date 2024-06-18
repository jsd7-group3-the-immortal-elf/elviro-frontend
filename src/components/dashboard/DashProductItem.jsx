import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { useState } from "react";

export default function DashProductItem({ product, handleChange }) {
	// const [productStatus, setProductStatus] = useState(product.status);

	return (
		<tr key={product.id}>
			<th className="text-white w-5">
				<input
					type="checkbox"
					name=""
					id=""
					className="accent-green w-4 h-4 m-3 "
				/>
			</th>
			<th>
				<Link to="/dashboard/product/view-product" className="hover:underline">
					{product.name}
				</Link>
			</th>
			<th>{product.room}</th>
			<th>{product.category}</th>
			<th>{product.price}</th>
			<th>{product.stock}</th>
			<th>{product.price * product.stock}</th>
			<th>
				<select
					name="status"
					id=""
					onChange={(e) => handleChange(e, product.id)}
				>
					<option value="Published">Published</option>
					<option value="Unpublished">Unpublished</option>
				</select>
			</th>
			<th>
				<p
					className={`rounded-md  ${
						product.status == "Published" ? "bg-lightgreen/50" : "bg-orange-100"
					}`}
				>
					{product.status}
				</p>
			</th>
		</tr>
	);
}

DashProductItem.propTypes = {
	product: PropTypes.object,
	handleChange: PropTypes.func,
};
