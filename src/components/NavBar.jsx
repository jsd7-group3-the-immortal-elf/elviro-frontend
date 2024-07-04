import { useState } from "react";
import LogoImage from "/images/elviro_logo.svg";
import { Link } from "react-router-dom";
import {
	FaMagnifyingGlass,
	FaUser,
	FaCartShopping,
	FaBars,
	FaXmark,
} from "react-icons/fa6";

//หน้า login
import CreateAccountPage from "../pages/login/CreateAccountPage";
import ForgetPage from "../pages/login/ForgetPage";
import LoginPage from "../pages/login/LoginPage";
import ResetPage from "../pages/login/ResetPage";

function NavBar() {
	const [mobileNavVisible, setMobileNavVisible] = useState(false);
	const [profileNavVisible, setProfileNavVisible] = useState(false);
	const [roomNavVisible, setRoomNavVisible] = useState(false);
	const [productNavVisible, setProductNavVisible] = useState(false);

	//ไว้เปิดหน้า login
	const [openAccountPage, setOpenAccountPage] = useState(false);
	const [openForgetPage, setOpenForgetPage] = useState(false);
	const [openLoginPage, setOpenLoginPage] = useState(false);
	const [openResetPage, setOpenResetPage] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavVisible(!mobileNavVisible);
	};

	const toggleProfileNav = () => {
		setProfileNavVisible(!profileNavVisible);
	};

	const toggleRoomNav = () => {
		setRoomNavVisible(!roomNavVisible);
	};

	const toggleProductNav = () => {
		setProductNavVisible(!productNavVisible);
	};

	//----------------------ไว้เปิดหน้า login ทั้งหมด ---------------------//
	//toggle เปิดหน้า login
	const toggleOpenAccount = () => {
		setOpenAccountPage(!openAccountPage);
	};
	const toggleOpenForget = () => {
		setOpenForgetPage(!openForgetPage);
	};
	const toggleOpenLogin = () => {
		setOpenLoginPage(!openLoginPage);
	};
	const toggleOpenReset = () => {
		setOpenResetPage(!openResetPage);
	};

	return (
		<>
			<header className="text-xl sticky top-0 z-">
				<nav className="flex justify-between items-center px-5 h-16 border-b bg-white border-green">
					{/* Logo */}
					<Link
						to="/"
						id="logo-nav"
						className="flex items-center gap-4 xl:mr-40"
					>
						<picture className="w-12">
							<img src={LogoImage} alt="Logo" />
						</picture>
						<h3>Elviro</h3>
					</Link>

					{/* Mobile Nav */}
					<nav className="lg:hidden w-full flex justify-end">
						<ul className="flex justify-end items-center gap-5 w-full">
							<li className="hidden md:flex lg:flex items-center border border-neutral-500 rounded-full w-full lg:w-40">
								<input
									type="text"
									className="rounded-full outline-none py-1 px-4 text-ellipsis overflow-hidden text-base flex-grow"
								/>
								<button type="submit">
									<FaMagnifyingGlass className="mr-4" />
								</button>
							</li>
							<li id="profile-mobile" className="h-full">
								<button
									onClick={toggleOpenLogin}
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
							<li id="mobile-toggle-open">
								<button onClick={toggleMobileNav}>
									<FaBars />
								</button>
							</li>
							{mobileNavVisible && (
								<li id="mobile-toggle-close" className="text-2xl w-[17.5px]">
									<button onClick={toggleMobileNav}>
										<FaXmark />
									</button>
								</li>
							)}
						</ul>
					</nav>

					{/* Sub Profile */}
					{profileNavVisible && (
						<nav
							id="sub-profile-mobile"
							className="fixed top-16 left-0 z-50 overflow-y-scroll w-full h-[calc(100vh-64px)] md:h-fit"
						>
							<ul className="w-full bg-white text-center">
								{[
									"Log In",
									"Profile",
									"Account Setting",
									"Payment",
									"Purchase History",
									"Wishlists",
									"Log Out",
								].map((item) => (
									<li key={item} className="border-b">
										<Link to="/profile" className="block w-full p-3">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}

					{/* Sub Mobile Nav */}
					{mobileNavVisible && (
						<section className={toggleScreenNav ? block : hidden}>
							<nav
								id="sub-mobile-nav"
								className="absolute top-16 left-0 z-50 w-full overflow-y-scroll h-[calc(100vh-64px)]"
							>
								<ul className="w-full bg-white text-center">
									<li className="border-b">
										<Link to="/shop" className="block w-full p-3">
											For Kids
										</Link>
									</li>
									<li className="border-b">
										<button onClick={toggleRoomNav} className="w-full p-3">
											Room
										</button>
									</li>
									{roomNavVisible && (
										<ul id="room-nav" className="bg-neutral-100">
											{["Bedroom", "Living Room", "Kitchen"].map((room) => (
												<li key={room} className="border-b">
													<Link to="/shop" className="block w-full p-3">
														{room}
													</Link>
												</li>
											))}
										</ul>
									)}
									<li className="border-b">
										<button onClick={toggleProductNav} className="w-full p-3">
											Product
										</button>
									</li>
									{productNavVisible && (
										<ul id="product-nav" className="bg-neutral-100">
											{[
												"All Product",
												"Beds",
												"Chairs",
												"Shelves",
												"Tables",
												"Closets",
											].map((product) => (
												<li key={product} className="border-b">
													<Link to="/shop" className="block w-full p-3">
														{product}
													</Link>
												</li>
											))}
										</ul>
									)}
									<li className="border-b">
										<Link to="/about" className="block w-full p-3">
											About Us
										</Link>
									</li>
								</ul>
							</nav>
						</section>
					)}

					{/* Desktop Nav */}
					<nav className="hidden lg:flex h-full w-full">
						<ul className="flex justify-center h-full w-full">
							{["For Kids", "Room", "Product", "About Us"].map(
								(item, index) => (
									<li key={index} className="h-full hover:bg-[#B5C18E]">
										<Link
											to={item === "About Us" ? "/about" : "/shop"}
											className="flex justify-center items-center h-full px-6 hover:text-white"
											onMouseEnter={
												index === 1
													? toggleRoomNav
													: index === 2
													? toggleProductNav
													: null
											}
											onMouseLeave={
												index === 1
													? toggleRoomNav
													: index === 2
													? toggleProductNav
													: null
											}
										>
											{item}
										</Link>
										{index === 1 && roomNavVisible && (
											<nav
												id="sub-room"
												className="absolute top-16 left-0 z-49 w-full"
											>
												<ul className="flex justify-center gap-32 bg-white px-14 py-6 m-auto w-fit border border-t-0">
													{["Bedroom", "Living Room", "Kitchen"].map((room) => (
														<li key={room} className="flex flex-col gap-4">
															<Link
																to="/shop"
																className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
															>
																{room}
															</Link>
															<ul className="flex flex-col gap-4">
																{[
																	"Beds",
																	"Bedside Tables",
																	"Wardrobes",
																	"Drawers",
																	"Dressing Tables",
																].map((item) => (
																	<li key={item}>
																		<Link
																			to="/shop"
																			className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
																		>
																			{item}
																		</Link>
																	</li>
																))}
															</ul>
														</li>
													))}
												</ul>
											</nav>
										)}
										{index === 2 && productNavVisible && (
											<nav
												id="sub-product"
												className="absolute top-16 left-0 z-49 w-full"
											>
												<ul className="flex justify-center gap-32 bg-white px-14 py-6 m-auto w-fit border border-t-0">
													{[
														"Beds",
														"Tables",
														"Chairs",
														"Cabinets",
														"Shelves",
													].map((product) => (
														<li key={product} className="flex flex-col gap-4">
															<Link
																to="/shop"
																className="font-semibold border-b border-neutral-300 hover:text-[#939d73]"
															>
																{product}
															</Link>
															<ul className="flex flex-col gap-4">
																{[
																	"Beds",
																	"Bedside Tables",
																	"Dressing Tables",
																	"Coffee Tables",
																	"Desks",
																	"Dining Tables",
																].map((item) => (
																	<li key={item}>
																		<Link
																			to="/shop"
																			className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
																		>
																			{item}
																		</Link>
																	</li>
																))}
															</ul>
														</li>
													))}
												</ul>
											</nav>
										)}
									</li>
								)
							)}
						</ul>
						<ul className="flex gap-5 justify-end items-center w-full">
							<li className="hidden lg:flex items-center border border-neutral-500 rounded-full w-80">
								<input
									type="text"
									className="rounded-full outline-none py-1 px-4 text-ellipsis overflow-hidden flex-grow"
								/>
								<button type="submit">
									<FaMagnifyingGlass className="mr-4" />
								</button>
							</li>
							<li id="profile" className="h-full">
								<section
									onClick={toggleOpenLogin}
									className="h-full flex items-center hover:cursor-pointer"
								>
									<FaUser />
								</section>
							</li>
							<li id="cart" className="h-full">
								<Link to="/cart" className="h-full flex items-center">
									<FaCartShopping />
								</Link>
							</li>
						</ul>
					</nav>
				</nav>
			</header>
			<main>
				<CreateAccountPage
					openAccountPage={openAccountPage}
					setOpenAccountPage={setOpenAccountPage}
					toggleOpenAccount={toggleOpenAccount}
					openLoginPage={openLoginPage}
					setOpenLoginPage={setOpenLoginPage}
					toggleOpenLogin={toggleOpenLogin}
				/>
				<LoginPage
					openLoginPage={openLoginPage}
					setOpenLoginPage={setOpenLoginPage}
					toggleOpenLogin={toggleOpenLogin}
					openAccountPage={openAccountPage}
					setOpenAccountPage={setOpenAccountPage}
					openForgetPage={openForgetPage}
					setOpenForgetPage={setOpenForgetPage}
				/>
				<ForgetPage
					openForgetPage={openForgetPage}
					setOpenForgetPage={setOpenForgetPage}
					toggleOpenForget={toggleOpenForget}
					toggleOpenLogin={toggleOpenLogin}
					toggleOpenReset={toggleOpenReset}
				/>
				<ResetPage
					openResetPage={openResetPage}
					setOpenResetPage={setOpenResetPage}
					toggleOpenReset={toggleOpenReset}
					toggleOpenLogin={toggleOpenLogin}
				/>
			</main>
		</>
	);
}

export default NavBar;
