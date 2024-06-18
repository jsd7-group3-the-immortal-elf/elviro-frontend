import CartBanner from "../../components/cart/CartBanner";
import CartList from "../../components/cart/CartList";
import CartTotal from "../../components/cart/CartTotal";

function CartPage() {
	return (
		<>
			<CartBanner />
			<div className="flex flex-col md:flex-row justify-center gap-4">
				<div className="md:basis-2/3">
					<CartList />
				</div>
				<div className="md:basis-1/3">
					<CartTotal />
				</div>
			</div>
			<div className="text-center py-10">
				<h3>
					Missing any items? continue <span>shopping</span>
				</h3>
			</div>
		</>
	);
}
export default CartPage;
