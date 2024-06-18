import LogoImage from "../../public/images/elviro_logo.svg";
import { Link } from "react-router-dom";

import {
	FaMagnifyingGlass,
	FaUser,
	FaCartShopping,
	FaBars,
	FaXmark,
	FaCircleXmark,
} from "react-icons/fa6";

function NavBar() {
	return (
		<header className="text-xl sticky top-0 z-50">
			<nav className="flex justify-between items-center px-5 h-16 border-b bg-white border-green">
				{/*------------------ logo ------------------*/}
				<Link to="/" id="logo-nav" className="flex items-center gap-4 xl:mr-40">
					<picture className="w-12">
						<img src={LogoImage} alt="Logo" />
					</picture>
					<h3>Elviro</h3>
				</Link>
				{/*------------------ mobile nav ------------------*/}
				{/* main */}
				<nav className="lg:hidden w-full flex justify-end">
					<ul className="flex justify-end items-center gap-5 w-full">
						<li
							id="search-mobile"
							className="hidden md:flexx lg:flex items-center border border-neutral-500 rounded-full w-full lg:w-40"
						>
							<input
								type="text"
								className="rounded-full outline-none py-1 px-4 text-ellipsis overflow-hidden text-base flex-grow"
							/>
							<button type="submit">
								<FaMagnifyingGlass className="mr-4" />
							</button>
						</li>
						{/* profile */}
						<li id="profile-mobile" className="h-full">
							<button
								onClick="showNav('sub-profile-mobile')"
								className="h-full flex items-center"
							>
								<FaUser />
							</button>
						</li>
						<li id="cart-mobile" className="h-full">
							<Link to="/cart" className="h-full flex items-center">
								<FaCartShopping />
							</Link>
						</li>
						{/* shop */}
						<li id="mobile-toggle-open" className="">
							<button onClick="showNav('sub-mobile-nav'), toggleMobileNav(), showNav('search-mobile'), showNav('profile-mobile'), showNav('cart-mobile'), showNav('logo-nav')">
								<FaBars />
							</button>
						</li>
						<li id="mobile-toggle-close" className="text-2xl w-[17.5px] hidden">
							<button onClick="showNav('sub-mobile-nav'), toggleMobileNav(), showNav('search-mobile'), showNav('profile-mobile'), showNav('cart-mobile'), showNav('logo-nav')">
								<FaXmark />
							</button>
						</li>
					</ul>
				</nav>
				{/* sub profile */}
				<nav
					id="sub-profile-mobile"
					className="hidden fixed top-16 left-0 z-50 overflow-y-scroll w-full h-[calc(100vh-64px)] md:h-fit"
				>
					<ul className="w-full bg-white text-center">
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Log In
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Profile
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Account Setting
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Payment
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Purchase History
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Wishlists
							</Link>
						</li>
						<li className="border-b">
							<Link to="/profile" className="block w-full p-3">
								Log Out
							</Link>
						</li>
					</ul>
				</nav>
				{/* sub menu */}
				<nav
					id="sub-mobile-nav"
					className="absolute top-16 left-0 z-50 w-full hidden overflow-y-scroll h-[calc(100vh-64px)]"
				>
					<ul className="w-full bg-white text-center">
						<li className="border-b">
							<Link to="/shop" className="block w-full p-3">
								For Kids
							</Link>
						</li>
						<li className="border-b">
							<button onClick="showNav('room-nav')" className="w-full p-3">
								Room
							</button>
						</li>
						<ul id="room-nav" className="hidden bg-neutral-100">
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									BedRoom
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Living Room
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Kitchen
								</Link>
							</li>
						</ul>
						<li className="border-b">
							<button onClick="showNav('product-nav')" className="w-full p-3">
								Product
							</button>
						</li>
						<ul id="product-nav" className="hidden bg-neutral-100">
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									All Product
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Beds
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Chairs
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Shelves
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Tables
								</Link>
							</li>
							<li className="border-b">
								<Link to="/shop" className="block w-full p-3">
									Closets
								</Link>
							</li>
						</ul>
						<li className="border-b">
							<Link to="/about" className="block w-full p-3">
								About Us
							</Link>
						</li>
					</ul>
				</nav>
				{/*------------------ desktop nav ------------------*/}
				<nav className="hidden lg:flex h-full w-full">
					<ul className="flex justify-center h-full w-full">
						{/* for kid */}
						<li className="h-full hover:bg-[#B5C18E]">
							<Link
								to="/shop"
								className="flex justify-center items-center h-full px-6 hover:text-white"
							>
								For Kids
							</Link>
						</li>
						{/* room */}
						<li className="h-full hover:bg-[#B5C18E]">
							<Link
								to="/shop"
								className="flex justify-center items-center h-full px-6 hover:text-white"
								onmouseenter="showNav('sub-room')"
								onmouseleave="showNav('sub-room')"
							>
								Room
							</Link>
							<nav
								id="sub-room"
								className="hidden absolute top-16 left-0 z-49 w-full"
							>
								<ul
									className="flex justify-center gap-32 bg-white px-14 py-6 m-auto w-fit border border-t-0"
									onmouseenter="showNav('sub-room')"
									onmouseleave="showNav('sub-room')"
								>
									<li className="flex flex-col gap-4">
										<Link
											to="shop
											"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Bedroom
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Beds
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Bedside Tables
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Wardrobes
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Drawers
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Dressing Tables
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="shop
											"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Living Room
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Sofas
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													TV Benches
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Coffee Tables
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Bookcases
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Cabinets
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Desks
												</Link>
											</li>
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Shoe Cabinets
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="shop
											"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Kitchen
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="shop
													"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Dining Tables
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</li>
						{/* product */}
						<li className="h-full hover:bg-[#B5C18E]">
							<Link
								to="/shop"
								className="flex justify-center items-center h-full px-6 hover:text-white"
								onmouseenter="showNav('sub-product')"
								onmouseleave="showNav('sub-product')"
							>
								Product
							</Link>
							<nav
								id="sub-product"
								className="hidden absolute top-16 left-0 z-49 w-full"
								onmouseenter="showNav('sub-product')"
								onmouseleave="showNav('sub-product')"
							>
								<ul className="flex justify-center gap-32 bg-white px-14 py-6 m-auto w-fit border border-t-0">
									<li className="flex flex-col gap-4">
										<Link
											to="/shop"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Beds
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Beds
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="/shop"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Tables
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Bedside Tables
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Dressing Tables
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Coffee Tables
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Desks
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Dining Tables
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="/shop"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Chairs
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Sofas
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Dining Chairs
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Desk Chairs
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="/shop"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Cabinets
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Wardrobes
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Drawers
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													TV Benches
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Shoe Cabinets
												</Link>
											</li>
										</ul>
									</li>
									<li className="flex flex-col gap-4">
										<Link
											to="/shop"
											className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
										>
											Shelves
										</Link>
										<ul className="flex flex-col gap-4">
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Bookcases
												</Link>
											</li>
											<li>
												<Link
													to="/shop"
													className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
												>
													Cabinets
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</li>
						{/* about */}
						<li className="h-full hover:bg-[#B5C18E]">
							<Link
								to="/about"
								className="flex justify-center items-center h-full px-6 hover:text-white"
							>
								About Us
							</Link>
						</li>
					</ul>
				</nav>
				{/* desktop icon nav */}
				<nav className="hidden lg:flex h-full">
					<ul className="flex items-center gap-6">
						{/* search */}
						<li className="flex items-center border border-neutral-500 rounded-full">
							<input
								type="text"
								className="rounded-full outline-none py-1 px-4 text-ellipsis overflow-hidden w-40 text-base"
							/>
							<button type="submit">
								<FaMagnifyingGlass className="mr-4" />
							</button>
						</li>
						{/* cart */}
						<li className="h-full">
							<Link
								to="/cart"
								onmouseenter="showNav('cart-nav')"
								onmouseleave="showNav('cart-nav')"
								className="h-full flex items-center"
							>
								<FaCartShopping />
							</Link>
						</li>
						{/* profile */}
						<li className="h-full">
							<Link
								to="/profile"
								onmouseenter="showNav('profile-nav')"
								onmouseleave="showNav('profile-nav')"
								className="h-full flex items-center"
							>
								<FaUser />
							</Link>
						</li>
					</ul>
				</nav>
				{/* cart nav */}
				<nav
					id="cart-nav"
					onmouseenter="showNav('cart-nav')"
					onmouseleave="showNav('cart-nav')"
					className="hidden fixed top-16 right-0 z-49 text-center bg-white"
				>
					<div className="fixed top-16 right-0 w-96 border border-t-0 bg-white">
						<h3 className="p-5">Shopping Cart</h3>
						<hr className="mx-4" />
						<ul className="h-80 overflow-y-scroll">
							<li className="flex items-center gap-4 p-4">
								<input
									type="checkbox"
									name="checkbox"
									id="product.id"
									className="h-5 w-5"
								/>
								<picture className="rounded-xl w-1/4">
									<img
										src="images/Cart-hero-image 1.png"
										alt="thumbnail"
										className="aspect-square"
									/>
								</picture>
								<div
									id="productInfo"
									className="flex flex-col w-2/3 justify-center items-start"
								>
									<h4>Sofaaaaaa</h4>
									<p>1 x price</p>
								</div>
								<button className="text-[#B5C18E] h-fit text-xl">
									<FaCircleXmark />
								</button>
							</li>
							<li className="flex items-center gap-4 p-4">
								<input
									type="checkbox"
									name="checkbox"
									id="product.id"
									className="h-5 w-5"
								/>
								<picture className="rounded-xl w-1/4">
									<img
										src="images/Cart-hero-image 1.png"
										alt="thumbnail"
										className="aspect-square"
									/>
								</picture>
								<div
									id="productInfo"
									className="flex flex-col w-2/3 justify-center items-start"
								>
									<h4>Sofaaaaaa</h4>
									<p>1 x price</p>
								</div>
								<button className="text-[#B5C18E] h-fit text-xl">
									<FaCircleXmark />
								</button>
							</li>
							<li className="flex items-center gap-4 p-4">
								<input
									type="checkbox"
									name="checkbox"
									id="product.id"
									className="h-5 w-5"
								/>
								<picture className="rounded-xl w-1/4">
									<img
										src="images/Cart-hero-image 1.png"
										alt="thumbnail"
										className="aspect-square"
									/>
								</picture>
								<div
									id="productInfo"
									className="flex flex-col w-2/3 justify-center items-start"
								>
									<h4>Sofaaaaaa</h4>
									<p>1 x price</p>
								</div>
								<button className="text-[#B5C18E] h-fit text-xl">
									<FaCircleXmark />
								</button>
							</li>
							<li className="flex items-center gap-4 p-4">
								<input
									type="checkbox"
									name="checkbox"
									id="product.id"
									className="h-5 w-5"
								/>
								<picture className="rounded-xl w-1/4">
									<img
										src="images/Cart-hero-image 1.png"
										alt="thumbnail"
										className="aspect-square"
									/>
								</picture>
								<div
									id="productInfo"
									className="flex flex-col w-2/3 justify-center items-start"
								>
									<h4>Sofaaaaaa</h4>
									<p>1 x price</p>
								</div>
								<button className="text-[#B5C18E] h-fit text-xl">
									<FaCircleXmark />
								</button>
							</li>
						</ul>
						<div className="">
							<div className="flex justify-between p-4">
								<h4 className="">Subtotal</h4>
								<p>999,999</p>
							</div>
							<hr />
							<div className="flex p-4 gap-4">
								<Link
									to="/cart/checkout"
									className="bg-[#B5C18E] text-white p-2 w-1/2 rounded-full text-center"
								>
									Checkout
								</Link>
								<button className="bg-[#B5C18E] text-white p-2 w-1/2 rounded-full">
									Comparison
								</button>
							</div>
						</div>
					</div>
				</nav>
				{/* profile nav */}
				<nav
					id="profile-nav"
					onmouseenter="showNav('profile-nav')"
					onmouseleave="showNav('profile-nav')"
					className="hidden fixed top-16 right-0 z-49 text-center bg-white"
				>
					<ul className="w-40 h-full border border-t-0">
						<li className="w-full hover:bg-[#B5C18E]">
							<Link
								to="/profile"
								className="w-full h-full p-3 block hover:text-white"
							>
								Profile
							</Link>
						</li>
						<hr />
						<li className="w-full hover:bg-[#B5C18E]">
							<Link
								to="/profile"
								className="w-full h-full p-3 block hover:text-white"
							>
								Wishlists
							</Link>
						</li>
						<hr />
						<li className="w-full hover:bg-[#B5C18E]">
							<Link
								to="/profile"
								className="w-full h-full p-3 block hover:text-white"
							>
								Setting
							</Link>
						</li>
						<hr />
						<li className="w-full hover:bg-[#B5C18E]">
							<Link
								to="/profile"
								className="w-full h-full p-3 block hover:text-white"
							>
								Log Out
							</Link>
						</li>
					</ul>
				</nav>
			</nav>
		</header>
	);
}

export default NavBar;
