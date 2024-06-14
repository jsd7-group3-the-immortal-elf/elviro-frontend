import CartBanner from "./CartBanner";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function Cart() {
	return (
		<>
			<div className="flex justify-center">
				<CartBanner />
			</div>
			<div className="flex justify-center">
				<div className="basis-2/3 px-8 hidden lg:block">
					<CartList />
				</div>
				<div className="basis-1/3 px-8 hidden lg:block">
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
export default Cart;
