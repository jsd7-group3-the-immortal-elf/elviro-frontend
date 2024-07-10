import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Banner from "../../components/Banner";
import Motto from "../../components/Motto";
import ProductCard from "../../components/home/ProductCard";

export default function ShopPage() {
	const [productList, setProductList] = useState([]);

	async function getProduct() {
		try {
			const response = await axiosInstance.get("/products");
			const { data } = await response.data;
			setProductList(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	useEffect(() => {
		getProduct();
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Banner h1="All Product" h3="All Product" />

			{/* filter section */}
			<section className="flex justify-between h-16 bg-[#B5C18E]">
				<ul className="flex items-center px-4 gap-4">
					<li className="p-4">
						<button
							onClick={"showNav('sub-filter'), toggleOverflowHidden('body')"}
						>
							<i className="fa-solid fa-sliders"></i>
						</button>
					</li>
					<li className="hidden md:flex">Filter</li>
					<li className="lg:hidden pl-4 py-2 border-l border-neutral-700">
						Showing 16 results
					</li>
					<li className="hidden lg:flex pl-4 py-2 border-l border-neutral-700">
						Showing 1-16 of 32 results
					</li>
				</ul>

				<ul className="hidden lg:flex items-center px-4 gap-4">
					<li className="">Show</li>
					<li className="">
						<input
							type="number"
							value="16"
							className="bg-white rounded w-10 py-1 pl-2"
						/>
					</li>
					<li>Sort by</li>
					<li>
						<input
							type="text"
							value="Default"
							className="bg-white rounded w-32 py-1 pl-2"
						/>
					</li>
				</ul>
			</section>

			<section
				id="sub-filter"
				className="hidden fixed top-0 left-0 z-50 bg-black/50 w-full h-full"
			>
				<div className="relative w-full h-full md:w-96 mt-20 md:mt-0 flex flex-col bg-white rounded-t-xl md:rounded-s-none md:rounded-r-xl">
					<div className="py-6 text-center border-b relative">
						<span>Filter and Sort</span>
						<button
							onClick="showNav('sub-filter'), toggleOverflowHidden('body')"
							className="absolute right-6"
						>
							<i className="fa-solid fa-xmark"></i>
						</button>
					</div>
					<ul className="w-full bg-white overflow-y-scroll">
						<li className="border-b">
							<button onClick="showNav('sub-sort-by')" className="w-full py-6">
								Sort by
							</button>
						</li>
						<ul id="sub-sort-by" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">must be input radio</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Price: low to high</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Price: high to low</button>
							</li>
						</ul>

						<li className="border-b">
							<button onClick="showNav('sub-category')" className="w-full py-6">
								Category
							</button>
						</li>
						<ul id="sub-category" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">this is tag</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Living Room</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Kitchen</button>
							</li>
						</ul>

						<li className="border-b">
							<button onClick="showNav('sub-color')" className="w-full py-6">
								Color
							</button>
						</li>
						<ul id="sub-color" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">Cream</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Red</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">Blue</button>
							</li>
						</ul>

						<li className="border-b">
							<button
								onClick="showNav('sub-size')"
								className="block w-full py-6"
							>
								Size
							</button>
						</li>
						<ul id="sub-size" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">maybe input form</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">min width - max width</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">min height - max height</button>
							</li>
						</ul>

						<li className="border-b">
							<button
								onClick="showNav('sub-price')"
								className="block w-full py-6"
							>
								Price
							</button>
						</li>
						<ul id="sub-price" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">this is checkbox</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">THB 0 - 199</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">THB 200 - 399</button>
							</li>
						</ul>

						<li className="border-b">
							<button
								onClick="showNav('sub-rating')"
								className="block w-full py-6"
							>
								Rating
							</button>
						</li>
						<ul id="sub-rating" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">checkbox</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">5</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">4</button>
							</li>
						</ul>

						<li className="border-b">
							<button
								onClick="showNav('sub-some')"
								className="block w-full py-6"
							>
								Something
							</button>
						</li>
						<ul id="sub-some" className="hidden bg-neutral-100">
							<li className="border-b">
								<button className="w-full py-6">checkbox</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">5</button>
							</li>
							<li className="border-b">
								<button className="w-full py-6">4</button>
							</li>
						</ul>
					</ul>
					<div className="flex gap-4 p-6 text-center w-full bg-white">
						<button
							type="submit"
							className="bg-[#B5C18E] hover:bg-[#a4af80] p-4 w-1/2 rounded-xl"
						>
							Filter
						</button>
						<button
							type="reset"
							className="bg-neutral-200 hover:bg-neutral-300 p-4 w-1/2 rounded-xl"
						>
							Reset
						</button>
					</div>
				</div>
			</section>

			{/* product section */}
			<section className="flex flex-col items-center gap-6 p-4 md:p-12">
				<h2>Our Product</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-8">
					{productList.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>

				<ul className="hidden lg:flex justify-center gap-4">
					<li className="px-3 py-2 bg-[#B5C18E] rounded">
						<a href="">1</a>
					</li>
					<li className="px-3 py-2 bg-[#B5C18E]/40 rounded">
						<a href="">2</a>
					</li>
					<li className="px-3 py-2 bg-[#B5C18E]/40 rounded">
						<a href="">3</a>
					</li>
					<li className="px-3 py-2 bg-[#B5C18E]/40 rounded">
						<a href="">Next</a>
					</li>
				</ul>
			</section>

			<Motto />
		</main>
	);
}
