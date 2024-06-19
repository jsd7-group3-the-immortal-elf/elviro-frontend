import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { useState } from "react";

export default function DashProductItem({ product, handleChange }) {
	// const [productStatus, setProductStatus] = useState(product.status);

	return (
		<tr key={product._id} className="">
			<th className="text-white w-5">
				<input
					type="checkbox"
					name="checkbox"
					onChange={(e) => handleChange(e, product._id)}
					className="accent-green w-4 h-4 m-3 "
				/>
			</th>
			<th>
				<div className="h-10 w-10 flex justify-center items-center">
					<img
						src={product.image}
						alt={product.name}
						className="aspect-square rounded-md"
					/>
				</div>
			</th>
			<th>
				<Link
					to={`/dashboard/product/view-product/${product._id}`}
					className="hover:underline"
				>
					{product.name}
				</Link>
			</th>
			<th>{product.room}</th>
			<th>{product.category}</th>
			<th>{product.price}</th>
			<th>{product.quantity}</th>
			<th>{product.price * product.quantity}</th>
			<th>
				<select
					name="status"
					id=""
					onChange={(e) => handleChange(e, product._id)}
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
