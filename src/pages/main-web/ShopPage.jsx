import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Banner from "../../components/Banner";
import Motto from "../../components/Motto";
import ProductCard from "../../components/home/ProductCard";
import { FaSliders, FaXmark } from "react-icons/fa6";

export default function ShopPage() {
	const [productList, setProductList] = useState([]);
	const page = 3;
	const limit = 16;
	const skip = (page - 1) * limit;
	const totalProduct = 40;
	const totalProductEachPage =
		limit * page > totalProduct ? totalProduct : limit * page;
	const maxPage = Math.ceil(totalProduct / limit);

	async function getProduct() {
		try {
			const response = await axiosInstance.get("/products");
			const { data } = await response.data;
			setProductList(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	function handleFilter() {}

	useEffect(() => {
		getProduct();
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Banner h1="All Product" h3="All Product" />

			{/* filter section */}
			<section className="flex justify-between items-center px-8 h-16 bg-green">
				<ul className="flex items-center gap-4 h-full">
					<li onClick={handleFilter} className="flex items-center gap-4 h-full">
						<FaSliders />
						<span className="hidden md:flex">Filter</span>
					</li>
					<li className="flex h-full py-2">
						<div className="border-l border-neutral-700 "></div>
					</li>

					<li className="flex items-center lg:hidden h-full">
						Showing {totalProduct} results
					</li>
					<li className="items-center hidden lg:flex h-full">
						Showing {skip + 1}-{totalProductEachPage} of {totalProduct} results
					</li>
				</ul>

				<ul className="hidden lg:flex items-center gap-4 h-full">
					<li>Show</li>
					<li>
						<input
							type="number"
							name="limit"
							value={limit}
							className="bg-white rounded w-10 py-1 pl-2"
						/>
					</li>
					<li>Sort by</li>
					<li>
						<select name="sort" className="bg-white rounded w-32 py-1 pl-2">
							<option value="Default">Default</option>
							<option value="Price">Price</option>
							<option value="Name">Name</option>
							<option value="Default">Default</option>
						</select>
					</li>
				</ul>
			</section>

			<section
				id="sub-filter"
				className="fixed top-0 left-0 z-50 bg-black/50 w-full h-full"
			>
				<div className="relative w-full h-full md:w-96 mt-20 md:mt-0 flex flex-col bg-white rounded-t-xl md:rounded-s-none md:rounded-r-xl overflow-hidden">
					<div className="py-6 text-center border-b relative bg-lightgreen">
						<span>Filter and Sort</span>
						<FaXmark className="text-xl absolute top-6 right-6" />
					</div>
					<ul className="w-full bg-white overflow-y-scroll">
						<li className="border-b">
							<button onClick="showNav('sub-sort-by')" className="w-full h-16">
								Sort by
							</button>
							<div className="flex flex-col bg-neutral-100">
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="radio" name="rooms" className="w-4 h-4" />
									Price: low to high
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="radio" name="rooms" className="w-4 h-4" />
									Price: high to low
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="radio" name="rooms" className="w-4 h-4" />
									Name
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="radio" name="rooms" className="w-4 h-4" />
									Newest
								</label>
							</div>
						</li>

						<li className="border-b">
							<button onClick="showNav('sub-category')" className="w-full h-16">
								Room
							</button>
							<hr />
							<div className="flex flex-col bg-neutral-100">
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input
										type="checkbox"
										name="rooms"
										value="Bedroom"
										className="w-4 h-4"
									/>
									Bedroom
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input
										type="checkbox"
										name="rooms"
										value="Living Room"
										className="w-4 h-4"
									/>
									Living Room
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input
										type="checkbox"
										name="rooms"
										value="Kitchen"
										className="w-4 h-4"
									/>
									Kitchen
								</label>
							</div>
						</li>

						<li className="border-b">
							<button onClick="showNav('sub-category')" className="w-full h-16">
								Category
							</button>
							<div className="flex flex-col bg-neutral-100">
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="checkbox" name="rooms" className="w-4 h-4" />
									Bed
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="checkbox" name="rooms" className="w-4 h-4" />
									Seating
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="checkbox" name="rooms" className="w-4 h-4" />
									Table
								</label>
								<hr />
								<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
									<input type="checkbox" name="rooms" className="w-4 h-4" />
									Storage
								</label>
							</div>
						</li>

						<li className="border-b">
							<button
								onClick="showNav('sub-price')"
								className="block w-full h-16"
							>
								Price
							</button>
							<div className="flex flex-col bg-neutral-100">
								<div className="flex justify-between">
									<p>min</p> <p>max</p>
								</div>
								<input type="range" name="" id="" />
							</div>
						</li>

						<li className="border-b">
							<button
								onClick="showNav('sub-size')"
								className="block w-full h-16"
							>
								Dimension
							</button>
							<div className="flex flex-col bg-neutral-100">
								<label className="flex flex-col gap-4 ml-8 h-32 accent-lime-600 cursor-pointer">
									Width
									<div className="flex justify-between">
										<p>min</p> <p>max</p>
									</div>
									<input type="range" name="" id="" />
								</label>
								<hr />
								<label className="flex flex-col gap-4 ml-8 h-32 accent-lime-600 cursor-pointer">
									Depth
									<div className="flex justify-between">
										<p>min</p> <p>max</p>
									</div>
									<input type="range" name="" id="" />
								</label>
								<hr />
								<label className="flex flex-col gap-4 ml-8 h-32 accent-lime-600 cursor-pointer">
									Depth (Extent)
									<div className="flex justify-between">
										<p>min</p> <p>max</p>
									</div>
									<input type="range" name="" id="" />
								</label>
								<hr />
								<label className="flex flex-col gap-4 ml-8 h-32 accent-lime-600 cursor-pointer">
									Height
									<div className="flex justify-between">
										<p>min</p> <p>max</p>
									</div>
									<input type="range" name="" id="" />
								</label>
							</div>
						</li>
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
				<h2>Our Product </h2>
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
						<a href="">{maxPage}</a>
					</li>
				</ul>
			</section>

			<Motto />
		</main>
	);
}
