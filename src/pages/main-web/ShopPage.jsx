import { useEffect, useState } from "react";
import { FaSliders } from "react-icons/fa6";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import axiosInstance from "../../utils/axiosInstance";

import Banner from "../../components/Banner";
import Motto from "../../components/Motto";
import ProductCard from "../../components/home/ProductCard";
import Filter from "../../components/shop/Filter";
import Loading from "../../components/Loading";

export default function ShopPage() {
	const [productList, setProductList] = useState([]);
	const [toggleFilter, setToggleFilter] = useState(false);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);

	const [totalProduct, setTotalProduct] = useState();
	const [totalPage, setTotalPage] = useState();
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(16);

	const skip = (page - 1) * limit;
	const totalProductEachPage =
		limit * page > totalProduct ? totalProduct : limit * page;

	async function getProduct() {
		try {
			setLoading(true);
			const response = await axiosInstance.get("/products");
			const { data } = await response.data;

			setProductList(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log("Failed to get data:", error);
		}
	}

	async function queryProduct() {
		try {
			setLoading(true);
			const response = await axiosInstance.get(`/products${query}`);
			const { data } = await response.data;

			setProductList(data);
			setTotalProduct(response.data.totalProduct);
			setTotalPage(response.data.totalPage);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log("Failed to get data:", error);
		}
	}

	function handleFilter() {
		setToggleFilter(!toggleFilter);
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		setQuery(`?limit=${limit}&page=${page}&${location.search}`);

		query ? queryProduct() : getProduct();
	}, [query, totalPage, page, limit]);

	return (
		<main>
			<Banner h1="All Product" h3="All Product" />

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
						<select
							name="sort"
							onChange={(e) => setLimit(e.target.value)}
							className="bg-white rounded w-fit py-1 pl-2"
						>
							<option value={16}>16</option>
							<option value={32}>32</option>
							<option value={48}>48</option>
							<option value={totalProduct}>All</option>
						</select>
					</li>
					<li>product per page</li>
				</ul>
			</section>

			{toggleFilter ? <Filter handleFilter={handleFilter} /> : null}

			{loading ? (
				<Loading />
			) : (
				<>
					<section className="flex flex-col items-center gap-6 p-4 md:p-12">
						<h2>Our Product </h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-8">
							{productList.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</div>

						<Pagination
							count={totalPage}
							page={page}
							hidePrevButton
							hideNextButton
							size="large"
							onChange={(e, value) => {
								setPage(value);
							}}
							renderItem={(item) => (
								<PaginationItem
									{...item}
									sx={{
										color: "#b5c18e",
										"&.Mui-selected": {
											backgroundColor: "#b5c18e",
											color: "white",
										},
										"&:hover": {
											backgroundColor: "rgba(181, 193, 142, 0.1)",
										},
									}}
								/>
							)}
						/>
					</section>

					<Motto />
				</>
			)}
		</main>
	);
}
