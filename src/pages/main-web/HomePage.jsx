import BannerHome from "../../components/home/BannerHome";
import ButtonShowmore from "../../components/home/ButtonShowmore";
import RoomCard from "../../components/home/RoomCard";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../../components/home/ProductCard";
import { useEffect } from "react";

export default function HomePage() {
	const [productList, setProductList] = useState([]);

	const roomList = [
		{
			image: "/images/Cart-hero-image 1.png",
			room: "Bedroom",
		},
		{
			image: "/images/Cart-hero-image 1.png",
			room: "Living Room",
		},
		{
			image: "/images/Cart-hero-image 1.png",
			room: "Kitchen",
		},
	];

	async function getQueryProduct() {
		try {
			//ดึง all product โดยกำหนด limit แค่ 8
			const response = await axiosInstance.get(`/products?limit=8`); //set default กำหนดแค่ limit = 8
			console.log(response);

			//ดึงค่า product จากข้างในออกมา
			const { data } = await response.data;
			setProductList(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	useEffect(() => {
		getQueryProduct();
	}, []);

	//ให้มี comma คั่นเลข 1000
	function numberWithCommas(number) {
		if (number == null) {
			return "";
		}
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	return (
		<div>
			<BannerHome />
			<section className="flex flex-col items-center gap-6 p-6 md:p-12">
				<h2>Browse By Room</h2>
				<p className="text-center text-mdmd:text-xl">
					See what we have to offer for your growing family. They might just
					right fit for you.
				</p>
				<div className="flex gap-8 w-full p-3 pb-8 overflow-x-scroll md:overflow-auto">
					{roomList.map((room, index) => (
						<RoomCard key={index} image={room.image} room={room.room} />
					))}
				</div>
			</section>

			<hr class="hidden md:flex border-lightgreen mx-16" />

			<section className="flex flex-col items-center gap-6 p-4 md:p-12">
				<h2>Our Product</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 md:gap-6">
					{productList.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</section>
			<ButtonShowmore />
		</div>
	);
}
// export default HomePage;
