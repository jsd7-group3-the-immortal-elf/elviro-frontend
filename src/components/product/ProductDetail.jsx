import ProductImage from "../../../public/images/mockup-sofa.png";
import { FaShareAlt } from "react-icons/fa";

function ProductDetail() {
	return (
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
			<section className="flex flex-col items-start gap-2 mb-5">
				<h2 className="text-xl font-normal md:text-3xl">Product_Name</h2>
				<h2 className="text-3xl md:text-6xl">
					Price <span className="text-xl">Baht</span>
				</h2>
				<h2 className="text-lg font-normal md:text-2xl">Color_Name</h2>
				<section className="flex gap-2">
					<input
						type="number"
						min="0"
						className="mr-2 p-2 py-3 text-center border border-gray-400 rounded-lg w-1/4"
						placeholder="1"
					/>
					<button className="border border-neutral-500 p-2 px-3 rounded-lg">
						Add to Cart
					</button>
				</section>

				<hr className="border border-gray-200" />
				<h2 className="text-lg font-normal">
					Product Id: <span>_id</span>
				</h2>
				<h2 className="text-lg font-normal">Tags</h2>
				<h2 className="text-lg font-normal">
					Share <span></span>
				</h2>
			</section>

			<hr className="border border-gray-200" />
		</section>
	);
}

export default ProductDetail;
