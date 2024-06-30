import CartBanner from "../../components/cart/CartBanner";
import CartList from "../../components/cart/CartList";
import CartTotal from "../../components/cart/CartTotal";

function CartPage() {
	const priceList = [
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "PÄRUP sofa",
			productQuanlity: "3",
			productPrice: "8999",
		},
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "VIMLE sofa",
			productQuanlity: "1",
			productPrice: "15999",
		},
		{
			productPicture: "/images/mockup-sofa.png",
			productName: "GLOSTAD sofa",
			productQuanlity: "2",
			productPrice: "2999",
		},
	];

	const totalPrice = priceList.reduce((acc, product) => {
		const subtotal = product.productQuanlity * product.productPrice;
		return acc + subtotal;
	}, 0);

	return (
		<div className="w-full px-4 md:px-20">
			<CartBanner />
			<div className="flex flex-col md:flex-row justify-center gap-4">
				<div className="w-full md:basis-2/3">
					<CartList />
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
export default CartPage;
