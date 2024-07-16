import ProductDetail from "../product/ProductDetail";
import ProductDescription from "../product/ProductDescription";
import ProductReview from "../product/ProductReview";

function ProductPage() {
	return (
		<div>
			<ProductDetail />
			<ProductDescription />
			<ProductReview />
		</div>
	);
}

export default ProductPage;
