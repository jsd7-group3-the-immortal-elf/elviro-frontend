import ProductDetail from "../../components/product/ProductDetail";
import ProductDescription from "../../components/product/ProductDescription";

export default function ProductPage() {
	return (
		<main className="mx-5 lg:mx-24">
			<ProductDetail />
			<ProductDescription />
		</main>
	);
}
