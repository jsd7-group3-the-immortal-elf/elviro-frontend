// import ProductDetail from "../../components/product/ProductDetail";
// import ProductDescription from "../../components/product/ProductDescription";
import { useParams } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../../components/home/ProductCard";

export default function ProductPage() {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(0);
	const [query, setQuery] = useState("");
	const [productList, setProductList] = useState([]); //เอาobject ของ product มาใส่ array

	const { id } = useParams();

	async function getProduct(id) {
		try {
			const response = await axiosInstance.get(`/products/${id}`); //fetch data จาก axiosInstance
			console.log(response);
			const { data } = await response.data; //ดึงของใน data ที่อยู่ data อีกที
			setProduct(data); //เอา data ไปเก็บใน state

			const responseQuery = await axiosInstance.get(
				`/products?limit=4&category=${data.category}`
			); //fetch data จาก axiosInstance
			console.log(responseQuery);
			const dataQuery = await responseQuery.data.data; //ดึงของใน data ที่อยู่ data อีกที
			setProductList(dataQuery);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	async function getQueryProduct(id) {
		try {
			const response = await axiosInstance.get(
				`/products/?limit=4&$category=${product.category}`
			); //fetch data จาก axiosInstance
			console.log(response);
			const { data } = await response.data; //ดึงของใน data ที่อยู่ data อีกที
			setProductList(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	console.log(productList);
	console.log(product);

	//mock user Id
	const userId = "668b6edc85daeb3a4220771a";
	//ตอนกด Add to Cart
	async function createNewCart(productId, quantity) {
		try {
			await axiosInstance.post(`/cart/${userId}`, {
				productId,
				quantity,
			});
			console.log(`Added ${quantity} of product ${productId} to cart.`);
		} catch (error) {
			console.log("Failed to create a new cart", error);
		}
	}

	//ให้ fetch data ใหม่ ตอนที่ id มีการเปลี่ยนแปลง
	useEffect(() => {
		getProduct(id);
		getQueryProduct();
	}, []);

	//ดึง related product

	//ให้มี comma คั่นเลข 1000
	function numberWithCommas(number) {
		if (number == null) {
			return "";
		}
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function copyToClipboard() {
		const url = location.href; //เอา url ปัจจุบันมา
		navigator.clipboard.writeText(url);
		alert("URL copied.");
		return;
	}

	//กำหนดตัวแปล width, height, depth--> ?. เป็น optional chaining
	const width = product.dimension?.width;
	const height = product.dimension?.height;
	const depth = product.dimension?.depth;
	const depthExtend = product.dimension?.depthExtend;

	//ปุ่มเพิ่มลด quantity
	const increment = () => {
		setQuantity(quantity + 1);
	};
	const decrement = () => {
		setQuantity(quantity - 1);
	};

	//ตั้งค่าให้พิมพ์เลขได้ด้วย
	const handleQuantityChange = (event) => {
		const value = parseInt(event.target.value, 10); //แปลงค่าที่ใส่เป็น integer
		setQuantity(value); //ห้ามใส่ติดลบ
	};

	return (
		<main className="mx-5 lg:mx-24 flex flex-col gap-5 md:gap-10">
			{/* <ProductDetail />
			<ProductDescription /> */}

			{/* -----ส่วน Product Detail ---------*/}
			<section className="mt-6 md:mt-24 flex flex-col gap-5 md:flex-row md:gap-24 md:justify-center">
				{/* รูป */}
				<picture className=" shadow-lg rounded-3xl ">
					<img
						src={product.productImage}
						alt="product_image"
						className="object-cover w-full h-full md:w-[800px] rounded"
					/>
				</picture>

				{/* ส่วนของ Detail */}
				<section className="flex flex-col items-start gap-2 mb-5 md:gap-5">
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
							onClick={() => createNewCart(product._id, quantity)}
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

			<hr className="border border-lightgreen" />

			{/* -----ส่วน Product Description ---------*/}
			<section className="flex flex-col gap-2 mt-5 mb-10">
				<h2 className="font-bold text-2xl  md:text-3xl">Description</h2>
				<p className="text-md lg:text-xl">{product.description}</p>
			</section>

			{/* -----ส่วน Related Product ---------*/}
			<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-8">
				{productList.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</main>
	);
}
