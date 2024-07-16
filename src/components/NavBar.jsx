import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	// FaMagnifyingGlass,
	FaUser,
	FaCartShopping,
	FaBars,
	FaXmark,
} from "react-icons/fa6";
import { useCookies } from "react-cookie";

import PropTypes from "prop-types";

import CreateAccountPage from "../pages/login/CreateAccountPage";
import ForgetPage from "../pages/login/ForgetPage";
import LoginPage from "../pages/login/LoginPage";
import ResetPage from "../pages/login/ResetPage";

function NavBar({ reload, setReload }) {
	const [mobileNavVisible, setMobileNavVisible] = useState(false);
	const [profileNavVisible, setProfileNavVisible] = useState(false);

	const [openAccountPage, setOpenAccountPage] = useState(false);
	const [openForgetPage, setOpenForgetPage] = useState(false);
	const [openLoginPage, setOpenLoginPage] = useState(false);
	const [openResetPage, setOpenResetPage] = useState(false);

	const [isLogin, setIsLogin] = useState(true);
	const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

	useEffect(() => {
		const token = cookies["access_token"];
		setIsLogin(false);
		if (token) setIsLogin(true);
	}, [reload, isLogin]);

	function handleLogout() {
		removeCookie(["access_token"]);
		location.reload();
	}

	const toggleMobileNav = () => {
		setMobileNavVisible(!mobileNavVisible);
		setProfileNavVisible(false);
	};

	const toggleProfileNav = () => {
		setProfileNavVisible(!profileNavVisible);
		setMobileNavVisible(false);
	};

	//---------------------- login  ---------------------//
	const toggleOpenAccount = () => {
		setOpenAccountPage(!openAccountPage);
	};
	const toggleOpenLogin = () => {
		setOpenLoginPage(!openLoginPage);
	};
	const toggleOpenForget = () => {
		setOpenForgetPage(!openForgetPage);
	};
	const toggleOpenReset = () => {
		setOpenResetPage(!openResetPage);
	};

	return (
		<>
			<header className="text-xl sticky top-0 z-40">
				<nav className="flex justify-between items-center px-5 h-16 border-b bg-white border-green">
					{/* Logo */}
					<Link
						to="/"
						id="logo-nav"
						className="flex items-center gap-4 w-1/2 lg:w-1/5"
					>
						<picture className="w-12">
							<img src="/images/elviro_logo.svg" alt="Logo" />
						</picture>
						<h3>Elviro</h3>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex h-full w-3/5">
						<ul className="flex justify-center h-full w-full">
							<li className="h-full hover:bg-green">
								<Link
									to="/shop"
									className="flex justify-center items-center h-16 px-6 hover:text-white"
								>
									Shop
								</Link>
							</li>
							<li className="h-full w-36 hover:bg-green">
								<Link
									to="/about"
									className="flex justify-center items-center h-16 px-6 hover:text-white"
								>
									About Us
								</Link>
							</li>
							<li className="h-full hover:bg-green">
								<Link
									to="/contact"
									className="flex justify-center items-center h-16 px-6 hover:text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					{/* Desktop Nav Icon */}
					<nav className="flex h-full w-1/2 lg:w-1/5">
						<ul className="flex gap-2 justify-end items-center w-full">
							{/* <li className="hidden lg:flex items-center border border-neutral-500 rounded-full w-80 mx-2">
								<input
									type="text"
									className="rounded-full outline-none py-1 px-4 text-ellipsis overflow-hidden flex-grow"
								/>
								<button type="submit">
									<FaMagnifyingGlass className="mr-4" />
								</button>
							</li> */}
							<li className="h-full">
								<Link to="/cart" className="h-full flex items-center px-2">
									<FaCartShopping />
								</Link>
							</li>
							<li className="h-full">
								<button
									onClick={isLogin ? toggleProfileNav : toggleOpenLogin}
									className="h-full flex items-center px-2 hover:cursor-pointer"
								>
									<FaUser />
								</button>
							</li>
							<li className="h-full lg:hidden">
								<button
									onClick={toggleMobileNav}
									className="h-full flex items-center px-2"
								>
									{mobileNavVisible ? (
										<FaXmark className="text-2xl w-[17.5px]" />
									) : (
										<FaBars className="text-2xl w-[17.5px]" />
									)}
								</button>
							</li>
						</ul>
					</nav>

					{/* Sub Profile */}
					{profileNavVisible && (
						<nav className="fixed top-16 right-0 z-39 overflow-y-scroll w-full sm:w-60 h-[calc(100vh-64px)] md:h-fit">
							<ul className="w-full bg-white text-center">
								<li className="border-b">
									<Link
										to="/dashboard/order"
										onClick={toggleProfileNav}
										className="block w-full p-3"
									>
										Dashboard
									</Link>
								</li>
								<li className="border-b">
									<Link
										to="/profile"
										onClick={toggleProfileNav}
										className="block w-full p-3"
									>
										Profile
									</Link>
								</li>
								<li className="border-b">
									<Link
										to="/profile/account"
										onClick={toggleProfileNav}
										className="block w-full p-3"
									>
										Account Setting
									</Link>
								</li>
								<li className="border-b">
									<Link
										to="/profile/payment"
										onClick={toggleProfileNav}
										className="block w-full p-3"
									>
										Payment Setting
									</Link>
								</li>
								<li className="border-b">
									<Link
										to="/profile/order-history"
										onClick={toggleProfileNav}
										className="block w-full p-3"
									>
										Purchase History
									</Link>
								</li>
								<li className="border-b">
									<button onClick={handleLogout} className="block w-full p-3">
										Log Out
									</button>
								</li>
							</ul>
						</nav>
					)}

					{/* Sub Mobile Nav */}
					{mobileNavVisible && (
						<section className={mobileNavVisible ? "block" : "hidden"}>
							<nav
								id="sub-mobile-nav"
								className="absolute top-16 left-0 z-50 w-full overflow-y-scroll h-[calc(100vh-64px)]"
							>
								<ul className="w-full bg-white text-center">
									<li className="border-b">
										<Link to="/shop" className="block w-full p-3">
											Shop
										</Link>
									</li>
									<li className="border-b">
										<Link to="/about" className="block w-full p-3">
											About Us
										</Link>
									</li>
									<li className="border-b">
										<Link to="/contact" className="block w-full p-3">
											Contact
										</Link>
									</li>
								</ul>
							</nav>
						</section>
					)}
				</nav>
			</header>

			<main>
				<CreateAccountPage
					openAccountPage={openAccountPage}
					toggleOpenAccount={toggleOpenAccount}
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
					reload={reload}
					setReload={setReload}
					setCookie={setCookie}
				/>
				<ForgetPage
					openForgetPage={openForgetPage}
					toggleOpenForget={toggleOpenForget}
					toggleOpenLogin={toggleOpenLogin}
					toggleOpenReset={toggleOpenReset}
				/>
				<ResetPage
					openResetPage={openResetPage}
					toggleOpenReset={toggleOpenReset}
					toggleOpenLogin={toggleOpenLogin}
				/>
			</main>
		</>
	);
}

NavBar.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};

export default NavBar;
