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
		{
			productName: "Sofa 05",
			productDescripton:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, mollitia illum facere placeat quidem ut deleniti expedita delectus quae, molestias libero aspernatur cupiditate reiciendis. Saepe beatae nobis rerum qui laboriosam?",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 849,
		},
		{
			productName: "Sofa 06",
			productDescripton:
				"Dolor sit amet consectetur adipisicing elit. Quos, mollitia illum facere placeat quidem ut deleniti expedita delectus quae.",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 1349,
		},
		{
			productName: "Sofa 07",
			productDescripton:
				"Quos, quidem ut deleniti expedita delectus quae, molestias libero aspernatur cupiditate reiciendis.",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 2349,
		},
		{
			productName: "Sofa 08",
			productDescripton: "Saepe beatae nobis rerum qui laboriosam",
			productImage: "public/images/Cart-hero-image 1.png",
			productPrice: 349,
		},
		
	];

	return (
		<div className="flex items-center justify-center">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 gap-6 pb-8 w-11/12">
				{productMock.map((product, index) => (
					<div key={index}>
						<Link to="/" >
						<div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-[0_0_10px_1px_rgb(150,150,150)] hover:bg-[#b9c590]/80">
							<picture className="aspect-square" >
								<img
									src={product.productImage}
									alt={product.name}
									className="aspect-square"
								/>
							</picture>
							<article className="flex flex-col gap-2 p-4">
								<h3 className="text-lg font-semibold">{product.productName}</h3>
								<p className="text-sm font-medium text-gray-700">฿ {product.productPrice.toLocaleString()}</p>
							</article>
						</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
export default ProductCard;
