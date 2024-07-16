import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfileNav from "./components/ProfileNav";

// import ErrorPage from "./pages/ErrorPage";

import HomePage from "./pages/main-web/HomePage";
import ShopPage from "./pages/main-web/ShopPage";
import ProductPage from "./pages/main-web/ProductPage";
import CartPage from "./pages/main-web/CartPage";
import CheckoutPage from "./pages/main-web/CheckoutPage";
import PurchasedPage from "./pages/main-web/PurchasedPage";
import AboutPage from "./pages/main-web/AboutPage";
import ContactPage from "./pages/main-web/ContactPage";

import ProfilePage from "./pages/profile/ProfilePage";
import ProfileAccountPage from "./pages/profile/ProfileAccountPage";
import ProfilePaymentPage from "./pages/profile/ProfilePaymentPage";
// import ProfileHistoryPage from "./pages/profile/ProfileHistoryPage";
// import ProfileWishlistPage from "./pages/profile/ProfileWishlistPage";

// import DashboardPage from "./pages/dashboard/DashboardPage";
import DashOrderPage from "./pages/dashboard/DashOrderPage";
import DashOrderViewPage from "./pages/dashboard/DashOrderViewPage";
// import DashCustomerPage from "./pages/dashboard/DashCustomerPage";
// import DashCustomerViewPage from "./pages/dashboard/DashCustomerViewPage";
import DashProductPage from "./pages/dashboard/DashProductPage";
import DashProductAddPage from "./pages/dashboard/DashProductAddPage";
import DashProductViewPage from "./pages/dashboard/DashProductViewPage";
// import DashAdminPage from "./pages/dashboard/DashAdminPage";
// import DashAdminSettingPage from "./pages/dashboard/DashAdminSettingPage";

import { useState } from "react";

export default function App() {
	const [reload, setReload] = useState(false);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar reload={reload} setReload={setReload} />
					<Outlet />
					<Footer />
				</>
			),
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					element: <HomePage />,
				},
				{
					path: "shop",
					element: <ShopPage />,
				},
				{
					path: "product/:id",
					element: <ProductPage />,
				},
				{
					path: "cart",
					element: <CartPage />,
				},
				{
					path: "cart/checkout",
					element: <CheckoutPage />,
				},
				{
					path: "cart/checkout/purchased",
					element: <PurchasedPage />,
				},
				{
					path: "about",
					element: <AboutPage />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},
			],
		},

		{
			path: "/profile",
			element: (
				<>
					<NavBar />
					<main className="flex flex-col items-center gap-10 bg-green py-10 min-h-[calc(100vh-64px)]">
						<h1 className="w-11/12 xl:w-4/5 justify-start">My Account</h1>
						<section className="flex flex-col lg:flex-row flex-grow gap-8 h-full w-11/12 xl:w-4/5">
							<ProfileNav />
							<Outlet />
						</section>
					</main>
					<Footer />
				</>
			),
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					element: <ProfilePage />,
				},
				{
					path: "account/:id",
					element: <ProfileAccountPage />,
				},
				{
					path: "payment",
					element: <ProfilePaymentPage />,
				},
				{
					path: "order-history",
					// element: <ProfileHistoryPage />,
				},
				{
					path: "wishlist",
					// element: <ProfileWishlistPage />,
				},
			],
		},

		{
			path: "/dashboard",
			element: <DashboardLayout reload={reload} setReload={setReload} />,
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					// element: <DashboardPage />,
				},
				{
					path: "order",
					element: <DashOrderPage reload={reload} setReload={setReload} />,
				},
				{
					path: "order/:id",
					element: <DashOrderViewPage reload={reload} setReload={setReload} />,
				},
				{
					path: "product",
					element: <DashProductPage reload={reload} setReload={setReload} />,
				},
				{
					path: "product/add-product",
					element: <DashProductAddPage reload={reload} />,
				},
				{
					path: "product/edit/:id",
					element: <DashProductAddPage />,
				},
				{
					path: "product/:id",
					element: <DashProductViewPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
