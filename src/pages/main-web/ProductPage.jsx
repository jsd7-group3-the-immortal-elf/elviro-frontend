// import ProductDetail from "../../components/product/ProductDetail";
// import ProductDescription from "../../components/product/ProductDescription";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function ProductPage() {
	const [product, setProduct] = useState({});

	const { id } = useParams;

	async function getProduct(id) {
		try {
			const response = await axiosInstance.get(`/products/${id}`);
			console.log(response);
			const data = await response.data;
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	//ให้ fetch data ใหม่ ตอนที่ id มีการเปลี่ยนแปลง
	useEffect(() => {
		getProduct(id);
	}, [id]);

	return (
		<main className="mx-5 lg:mx-24">
			{/* <ProductDetail />
			<ProductDescription /> */}

			{/* -----ส่วน Product Detail ---------*/}
			<section className="mt-6 md:mt-24 flex flex-col gap-5 md:flex-row md:gap-24 md:justify-center">
				{/* รูป */}
				<picture className=" shadow-lg rounded-3xl">
					<img
						src={ProductImage}
						alt="product_image"
						className="object-cover w-full md:w-[800px] rounded"
					/>
				</picture>

				{/* ส่วนของ Detail */}
				<section className="flex flex-col items-start gap-2 mb-5 md:gap-5">
					<h2 className="text-xl font-normal md:text-3xl">Product_Name</h2>
					<h2 className="text-4xl md:text-6xl">
						Price <span className="text-xl md:text-2xl">Baht</span>
					</h2>
					<h2 className="text-xl font-normal md:text-2xl">Color_Name</h2>
					<section className="flex gap-2 justify-center">
						<input
							type="number"
							min="0"
							className="mr-2 p-2 py-3 text-center border border-gray-400 rounded-lg w-1/4"
							placeholder="1"
						/>
						<button className="w-full border border-neutral-500 p-2 px-3 rounded-lg text-lg hover:bg-brown hover:text-white">
							Add to Cart
						</button>
					</section>

					<hr className="border border-gray-200" />
					<h2 className="product-detail">
						Product Id: <span>_id</span>
					</h2>
					<h2 className="product-detail">
						Tags <span>_tags</span>
					</h2>
					<h2 className="product-detail flex items-center gap-2">
						Share:
						<span>
							<FaShareAlt className="text-2xl" />
						</span>
					</h2>
				</section>

				<hr className="border border-gray-200" />
			</section>

			{/* -----ส่วน Product Description ---------*/}
			<section className="flex flex-col gap-2 mt-5">
				<h2 className="text-2xl font-normal md:text-3xl">Description</h2>
				<p className="text-md lg:text-xl">---Text Description---</p>
			</section>
		</main>
	);
}
