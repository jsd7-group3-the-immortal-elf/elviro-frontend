import { useState, useEffect } from "react";
// import { useParams} from 'react-router-dom'
import PropTypes from "prop-types";
import CartBanner from "../../components/cart/CartBanner";
import CartList from "../../components/cart/CartList";
import CartTotal from "../../components/cart/CartTotal";

function CartPage({ tokenUserId }) {
	// const { userId } = useParams();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="w-full px-4 md:px-20">
			<CartBanner />
			<div className="flex flex-col md:flex-row justify-center gap-4">
				<div className="w-full md:basis-2/3">
					<CartList
						tokenUserId={tokenUserId}
						totalPrice={totalPrice}
						setTotalPrice={setTotalPrice}
					/>
				</div>
				<div className="w-full md:basis-1/3">
					<CartTotal totalPrice={totalPrice} />
				</div>
			</div>
			<div className="text-center py-10">
				<h3>
					Missing any items? continue <span>shopping</span>
				</h3>
			</div>
		</div>
	);
}

CartPage.propTypes = {
	tokenUserId: PropTypes.string,
};

export default CartPage;

// const priceList = [
// 	{
// 		productPicture: "/images/mockup-sofa.png",
// 		productName: "PÄRUP sofa",
// 		productQuanlity: "3",
// 		productPrice: "8999",
// 	},
// 	{
// 		productPicture: "/images/mockup-sofa.png",
// 		productName: "VIMLE sofa",
// 		productQuanlity: "1",
// 		productPrice: "15999",
// 	},
// 	{
// 		productPicture: "/images/mockup-sofa.png",
// 		productName: "GLOSTAD sofa",
// 		productQuanlity: "2",
// 		productPrice: "2999",
// 	},
// ];

// const totalPrice = priceList.reduce((acc, product) => {
// 	const subtotal = product.productQuanlity * product.productPrice;
// 	return acc + subtotal;
// }, 0);
