// import ProductDetail from "../../components/product/ProductDetail";
// import ProductDescription from "../../components/product/ProductDescription";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import ProductCard from "../../components/home/ProductCard";
import axiosInstance from "../../utils/axiosInstance";
import { numberWithCommas } from "../../utils/format";
import PropTypes from "prop-types";

export default function ProductPage({ tokenUserId }) {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(0);
	const [productList, setProductList] = useState([]);
	const { id } = useParams();

	async function getProduct(id) {
		try {
			const response = await axiosInstance.get(`/products/${id}`);
			const { data } = await response.data;

			setProduct(data);

			const responseQuery = await axiosInstance.get(
				`/products?limit=4&category=${data.category}`
			);
			const dataQuery = await responseQuery.data.data;

			setProductList(dataQuery);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	async function getQueryProduct() {
		try {
			const response = await axiosInstance.get(
				`/products/?limit=4&$category=${product.category}`
			);
			const { data } = await response.data;

			setProductList(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	async function createNewCart(productId, quantity, userId) {
		try {
			await axiosInstance.post(`/cart/${userId}`, {
				productId,
				quantity,
			});
			alert("Create cart success.");
		} catch (error) {
			console.log("Failed to create a new cart", error);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);

		//เอา token ออกมา
		const token = localStorage.getItem("access_token");
		const userId = decodeToken(token);
		console.log(userId);
		getProduct(id);
		getQueryProduct();
	}, [id]);

	function copyToClipboard() {
		const url = location.href;
		navigator.clipboard.writeText(url);
		alert("URL copied.");
		return;
	}

	const width = product.dimension?.width;
	const height = product.dimension?.height;
	const depth = product.dimension?.depth;
	const depthExtend = product.dimension?.depthExtend;

	const increment = () => {
		setQuantity(quantity + 1);
	};
	const decrement = () => {
		setQuantity(quantity - 1);
	};

	const handleQuantityChange = (event) => {
		const value = parseInt(event.target.value, 10);
		setQuantity(value);
	};

	return (
		<main className="mx-5 lg:mx-24 flex flex-col gap-5 md:gap-10">
			{/* ----- Product Detail ---------*/}
			<section className="mt-6 md:mt-24 flex flex-col gap-5 md:flex-row md:gap-36 md:justify-center">
				<picture className=" shadow-lg rounded-3xl w-full md:w-1/2">
					<img
						src={product.productImage}
						alt="product_image"
						className="object-cover w-full h-full  rounded"
					/>
				</picture>

				<section className="flex flex-col items-start gap-2 mb-5 md:gap-5 w-full md:w-1/2">
					<h2 className="text-xl font-normal md:text-3xl">
						{product.productName}
					</h2>
					<h2 className="text-4xl md:text-6xl">
						{numberWithCommas(product.price)}{" "}
						<span className="text-xl md:text-2xl">Baht</span>
					</h2>
					<h2 className="text-xl font-normal md:text-2xl">{product.color}</h2>
					<h2 className="product-detail">
						Stock:{" "}
						<span
							className={`font-normal ${
								product.stock > 10 ? "text-neutral-500" : "text-red-500"
							}`}
						>
							{product.stock}
						</span>
					</h2>
					<h2 className="product-detail">
						Size:{" "}
						<span className="font-normal">
							{width} x {depth} x {height} cm
						</span>
						&nbsp;
						<span className="font-normal inline-block">
							<p
								className={`font-bold ${depthExtend == 0 ? "hidden" : "block"}`}
							>
								Extend:
								<span className="font-normal"> {depthExtend} cm</span>
							</p>
						</span>
					</h2>
					<h2 className="product-detail">
						Warranty:{" "}
						<span className="font-normal">
							{product.warranty} {product.warranty > 1 ? "years" : "year"}
						</span>{" "}
					</h2>
					<hr className="hidden md:block border border-lightgreen w-full my-2" />
					<section className="flex flex-col md:flex-row gap-2 justify-center items-center">
						<section className="flex justify-center items-center border border-neutral-400 rounded-3xl overflow-hidden w-32 md:w-56">
							<button onClick={decrement} className="number-button">
								-
							</button>
							<input
								type="number"
								min="0"
								value={quantity}
								onChange={handleQuantityChange}
								placeholder="0"
								className="lg  p-2 py-3 text-center w-14"
							/>
							<button onClick={increment} className="number-button">
								+
							</button>
						</section>

						<button
							onClick={() => createNewCart(product._id, quantity, tokenUserId)}
							className="md:w-full border border-neutral-500 p-2 px-3 rounded-lg text-md bg-brown text-white hover:bg-white hover:text-black"
						>
							Add to Cart
						</button>
					</section>

					<h2 className="product-detail">
						Product Id: <span className="font-normal">{product._id}</span>
					</h2>
					<h2 className="product-detail">
						Category: <span className="font-normal">{product.category}</span>
					</h2>
					<h2 className="product-detail flex items-center gap-2">
						Share:
						<span>
							<FaShareAlt
								onClick={copyToClipboard}
								className="text-2xl hover:cursor-pointer"
							/>
						</span>
					</h2>
				</section>
			</section>

			<section className="flex flex-col gap-7 ">
				<hr className="border border-lightgreen" />
				<h2 className="font-bold text-2xl  md:text-3xl">Description</h2>
				<p className="text-md lg:text-xl">{product.description}</p>
				<hr className="border border-lightgreen" />
			</section>

			<section className="flex flex-col gap-4 mb-5">
				<h2 className="font-bold text-2xl md:text-3xl">Related Products</h2>
				<p className="text-md lg:text-xl text-center font-semibold text-neutral-500">
					Here are some products that might interest you.
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-8">
					{productList.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</section>
		</main>
	);
}

ProductPage.propTypes = {
	tokenUserId: PropTypes.string,
};
