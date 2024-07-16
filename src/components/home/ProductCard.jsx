import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import format from "../../utils/format";

export default function ProductCard({ product }) {
	return (
		<Link
			key={product._id}
			to={`/product/${product._id}`}
			className="bg-lightgreen rounded-lg overflow-hidden hover:shadow-[0_0_10px_1px_rgb(150,150,150)]"
		>
			<div className="aspect-square overflow-hidden">
				<img
					src={product.productImage}
					alt={product.productName}
					className="aspect-square overflow-hidden hover:scale-110 duration-500 hover:duration-500"
				/>
			</div>
			<article className="flex flex-col gap-2 p-4">
				<h3>{product.productName}</h3>
				<p>{format.thCurrency(product.price)}</p>
				<p>{format.thCurrency(product.price)}</p>
			</article>
		</Link>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object,
};
