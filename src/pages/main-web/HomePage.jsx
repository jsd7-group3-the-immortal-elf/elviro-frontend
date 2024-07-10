import BannerHome from "../../components/home/BannerHome";
import ButtonShowmore from "../../components/home/ButtonShowmore";
// import ProductCard from "../../components/home/ProductCard";
import RoomCard from "../../components/home/RoomCard";

function HomePage() {
	return (
		<div>
			<BannerHome />
			<RoomCard />
			{/* <ProductCard /> */}
			<ButtonShowmore />
		</div>
	);
}
export default HomePage;
