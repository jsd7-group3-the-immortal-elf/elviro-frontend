import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Banner from "../../components/Banner";
import Motto from "../../components/Motto";
import ProductCard from "../../components/home/ProductCard";
import { FaSliders } from "react-icons/fa6";
import Filter from "../../components/shop/Filter";

export default function ShopPage() {
	const [productList, setProductList] = useState([]);
	const [toggleFilter, setToggleFilter] = useState(false);
	const [query, setQuery] = useState("");

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

	function handleFilter() {
		setToggleFilter(!toggleFilter);
	}

	useEffect(() => {
		getProduct();
		window.scrollTo(0, 0);
		setQuery(location.search);
	}, []);

	return (
		<main>
			<Banner h1="All Product" h3="All Product" />

			{/* filter section */}
			<section className="flex justify-between items-center px-8 h-16 bg-green">
				<ul className="flex items-center gap-4 h-full">
					<li
						onClick={handleFilter}
						className="flex items-center gap-4 h-full cursor-pointer"
					>
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
						<select name="sort" className="bg-white rounded w-fit py-1 pl-2">
							<option value={16}>16</option>
							<option value={32}>32</option>
							<option value={48}>48</option>
							<option value="All">All</option>
						</select>
					</li>
					<li>product per page</li>
					{/* <li>Sort by</li>
					<li>
						<select name="sort" className="bg-white rounded w-32 py-1 pl-2">
							<option value="Default">Default</option>
							<option value="Price">Price</option>
							<option value="Name">Name</option>
							<option value="Default">Default</option>
						</select>
					</li> */}
				</ul>
			</section>

			{toggleFilter ? <Filter handleFilter={handleFilter} /> : null}

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
