import { Link } from "react-router-dom";

function ProductCard() {
	const productMock = [
		{
			productName: "Sofa 01",
			productDescripton:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, mollitia illum facere placeat quidem ut deleniti expedita delectus quae, molestias libero aspernatur cupiditate reiciendis. Saepe beatae nobis rerum qui laboriosam?",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 849,
		},
		{
			productName: "Sofa 02",
			productDescripton:
				"Dolor sit amet consectetur adipisicing elit. Quos, mollitia illum facere placeat quidem ut deleniti expedita delectus quae.",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 1349,
		},
		{
			productName: "Sofa 03",
			productDescripton:
				"Quos, quidem ut deleniti expedita delectus quae, molestias libero aspernatur cupiditate reiciendis.",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 2349,
		},
		{
			productName: "Sofa 04",
			productDescripton: "Saepe beatae nobis rerum qui laboriosam",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 349,
		},
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-6">
			{productMock.map((product, index) => (
				<div key={index}>
					<Link
						to="/"
						className="bg-[#b9c590]/80 rounded-lg overflow-hidden hover:shadow-[0_0_10px_1px_rgb(150,150,150)]"
					>
						<picture className="aspect-square">
							<img
								src={product.productImage}
								alt={product.name}
								className="aspect-square"
							/>
						</picture>
						<article className="flex flex-col gap-2 p-4">
							<h3>{product.productName}</h3>
							<p className="">฿ {product.productPrice.toLocaleString()}</p>
						</article>
					</Link>
				</div>
			))}
		</div>
	);
}
export default ProductCard;
