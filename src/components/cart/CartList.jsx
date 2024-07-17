import { useState, useEffect } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

function CartList({ tokenUserId, totalPrice, setTotalPrice }) {
	const [cartItems, setCarItems] = useState([]);

	async function getCartList() {
		try {
			console.log(tokenUserId);
			const res = await axiosInstance.get(`/cart/${tokenUserId}`);
			const { data } = res.data;
			console.log(data);
			setCarItems(data);
			calculateTotalPrice(data);
		} catch (error) {
			console.log("Failed to get data:", error);
		}
	}

	useEffect(() => {
		getCartList();
	}, []);

	const calculateTotalPrice = (items) => {
		const total = items.reduce((sum, item) => {
			if (item.cart.isChecked) {
				return sum + (item.productDetail[0]?.price || 0) * item.cart.quantity;
			}
			return sum;
		}, 0);
		setTotalPrice(total);
	};

	const updateCartItemQuantity = async (cartItemId, newQuantity) => {
		try {
			await axiosInstance.patch(`/cart/${tokenUserId}`, {
				cartItemId,
				newQuantity,
			});
		} catch (error) {
			console.log("Failed to update item quantity:", error);
		}
	};

	const handleQuantityChange = (cartItemId, change) => {
		const updatedCartItems = cartItems.map((item) => {
			if (item.cart._id === cartItemId) {
				const newQuantity = Math.max(1, item.cart.quantity + change);
				updateCartItemQuantity(cartItemId, newQuantity);
				return { ...item, cart: { ...item.cart, quantity: newQuantity } };
			}
			return item;
		});
		setCarItems(updatedCartItems);
		calculateTotalPrice(updatedCartItems);
	};

	const handleCheckboxChange = (cartItemId) => {
		const updatedCartItems = cartItems.map((item) => {
			if (item.cart._id === cartItemId) {
				return {
					...item,
					cart: { ...item.cart, isChecked: !item.cart.isChecked },
				};
			}
			return item;
		});
		setCarItems(updatedCartItems);
		calculateTotalPrice(updatedCartItems);
	};

	return (
		<div>
			<table style={{ width: "100%", borderCollapse: "collapse" }}>
				<thead>
					<tr>
						<th style={tableHeaderStyle}>Select</th>
						<th style={tableHeaderStyle}>Image</th>
						<th style={tableHeaderStyle}>Product Name</th>
						<th style={tableHeaderStyle}>Price</th>
						<th style={tableHeaderStyle}>Quantity</th>
						<th style={tableHeaderStyle}>Total</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((cartItem) => (
						<tr key={cartItem.cart._id}>
							<td style={tableCellStyle}>
								<input
									type="checkbox"
									checked={cartItem.cart.isChecked}
									onChange={() => handleCheckboxChange(cartItem.cart._id)}
								/>
							</td>
							<td style={tableCellStyle}>
								{cartItem.productDetail[0] && (
									<img
										src={cartItem.productDetail[0].productImage}
										alt={cartItem.productDetail[0].productName}
										style={{ width: "50px", height: "50px" }}
									/>
								)}
							</td>
							<td style={tableCellStyle}>
								{cartItem.productDetail[0]?.productName || "N/A"}
							</td>
							<td style={tableCellStyle}>
								฿{cartItem.productDetail[0]?.price.toFixed(2) || "N/A"}
							</td>
							<td style={tableCellStyle}>
								<button
									onClick={() => handleQuantityChange(cartItem.cart._id, -1)}
								>
									<FaMinus />
								</button>{" "}
								{cartItem.cart.quantity}{" "}
								<button
									onClick={() => handleQuantityChange(cartItem.cart._id, 1)}
								>
									<FaPlus />
								</button>
							</td>
							<td style={tableCellStyle}>
								฿
								{(
									(cartItem.productDetail[0]?.price || 0) *
									cartItem.cart.quantity
								).toFixed(2)}
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td
							colSpan="5"
							style={{
								...tableCellStyle,
								textAlign: "right",
								fontWeight: "bold",
							}}
						>
							Total Price:
						</td>
						<td style={{ ...tableCellStyle, fontWeight: "bold" }}>
							฿{totalPrice.toFixed(2)}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

const tableHeaderStyle = {
	backgroundColor: "#f2f2f2",
	padding: "10px",
	borderBottom: "1px solid #ddd",
	textAlign: "left",
};

const tableCellStyle = {
	padding: "10px",
	borderBottom: "1px solid #ddd",
};

export default CartList;

// const handleQuantityChange = (cartItemId, change) => {
// 	const updateCartItems = cartItems.map(item => {
// 		if (item._id === cartItemId) {
// 			const newQuanntity = Math.max(1, item.quantity + change);
// 			updateCartItemQuantity(cartItemId , newQuanntity);
// 			return { ...item, quantity: newQuanntity };
// 		}
// 		return item;
// 	});
// 	setCarItems(updateCartItems);
// };

// async function getProductDetails(productId) {
// 	try {
// 		const res = await axiosInstance.get(`/products/${productId}`);
// 		// const {data} = res.data
// 		// setCart(data)
// 		// {... product:[], ...}
// 		// cart.cartDetail
// 		// cart.productDetail
// 		// cart.productDetail.map(product => { ... })
// 		// cart.totalPrice
// 		// cart.totalPrice-7%
// 		// quan > cart.productDetail.find(item => item.productId == product._id).quantity
// 		console.log('product detail respone',res)
// 		return res.data.data;
// 	} catch (error) {
// 		console.log(`failes to get product details for ${productId}:`,error);
// 		return null;
// 	}
// }

// async function updateCartItemQuantity(productId, newQuantity) {
// 	try {
// 		const res = await axiosInstance.patch(`/cart/${userId}`, {productId: productId, quantity: newQuantity});
// 		console.log("cart update", res.data);
// 		fetchCartAndProducts();
// 	} catch (error) {
// 		console.log('Failed to update item quantity', error);
// 	}
// }

// async function fetchCartAndProducts() {
// 	const cartList = await getCartList(userId);
// 	const itemWithDetails = await Promise.all(cartList.map(async (item) => {
// 		const productDetails = await getProductDetails(item.productId);
// 		return { ...item, productDetails };
// 	}));
// 	setCarItems(itemWithDetails);

// const total = itemWithDetails.reduce((sum, item) => {
// 	return sum + (item.productDetails?.price || 0) * item.quantity;
//   }, 0);
//   setTotalPrice(total);
// }

{
	/* <>
			<section className="px-8" id="cart_item">
				<div className="hidden md:block">
					<table className="table-auto w-full text-center">
						<thead className="bg-[#DEAC80]">
							<tr>
								<th className=" min-w-12 md:max-w-16 font-semibold"></th>
								<th className="font-semibold">Product</th>
								<th className="font-semibold">Price</th>
								<th className="font-semibold">Quanlity</th>
								<th className="font-semibold">Subtotal</th>
								<th className="font-semibold"></th>
							</tr>
						</thead>
						<tbody>
							{priceList.map((product, index) => (
								<tr key={index}>
									<td>
										<picture className="w-16 h-16 object-cover">
											<img
												src={product.productPicture}
												alt={product.productName}
											/>
										</picture>
									</td>
									<td>{product.productName}</td>
									<td>฿ {parseFloat(product.productPrice).toLocaleString()}</td>
									<td className="bg-slate-200">
										<button className="px-2">-</button>
										<span className="">{product.productQuanlity}</span>
										<button className="px-2">+</button>
									</td>
									<td>
										฿{" "}
										{parseFloat(
											product.productQuanlity * product.productPrice
										).toLocaleString()}
									</td>
									<td className="w-24">
										<button>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="w-full px-4">
					<div className="grid grid-col-1 gap-2">
						{priceList.map((product, index) => (
							<div key={index} className="flex md:hidden">
								<picture className="flex w-full border-2 py">
									<img
										className="px-4"
										src={product.productPicture}
										alt={product.productName}
									/>
								</picture>
								<div className="w-full px-2 py-4 bg-[#F4F4F4]">
									<h3 className="text-base">{product.productName}</h3>
									<h3 className="text-base">
										฿ {parseFloat(product.productPrice).toLocaleString()}
									</h3>
									<div className="flex py-2 justify-between items-center">
										<p className="px-4">
											<button className="px-2">-</button>
											<span className="px-2 py-1 border-2 border-gray-500">
												{product.productQuanlity}
											</span>
											<button className="px-2">+</button>
										</p>
										<button className="px-2">
											<FaTrash />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</> */
}

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
