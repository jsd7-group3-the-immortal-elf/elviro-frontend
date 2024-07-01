import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import ProfileNav from "./components/ProfileNav";
// import DashboardNav from "./components/DashBoardNav";

// import ErrorPage from "./pages/ErrorPage";

// import HomePage from "./pages/main-web/HomePage";
// import ShopPage from "./pages/main-web/ShopPage";
// import ProductPage from "./pages/main-web/ProductPage";
// import CartPage from "./pages/main-web/CartPage";
import CheckoutPage from "./pages/main-web/CheckoutPage";
// import AboutPage from "./pages/main-web/AboutPage";
// import ContactPage from "./pages/main-web/ContactPage";

// import ProfilePage from "./pages/profile/ProfilePage";
import ProfileAccountPage from "./pages/profile/ProfileAccountPage";
import ProfilePaymentPage from "./pages/profile/ProfilePaymentPage";
// import ProfileHistoryPage from "./pages/profile/ProfileHistoryPage";
// import ProfileWishlistPage from "./pages/profile/ProfileWishlistPage";

// import DashboardPage from "./pages/dashboard/DashboardPage";
import DashOrderPage from "./pages/dashboard/DashOrderPage";
import DashOrderViewPage from "./pages/dashboard/DashOrderViewPage";
// import DashCustomerPage from "./pages/dashboard/DashCustomerPage";
// import DashCustomerViewPage from "./pages/dashboard/DashCustomerViewPage";
// import DashProductPage from "./pages/dashboard/DashProductPage";
// import DashProductAddPage from "./pages/dashboard/DashProductAddPage";
// import DashProductViewPage from "./pages/dashboard/DashProductViewPage";
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
					<NavBar />
					<Outlet />
					{/* <Footer /> */}
				</>
			),
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					// element: <HomePage />,
				},
				{
					path: "shop",
					// element: <ShopPage />,
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
					// element: <PurchasedPage />,
				},
				{
					path: "about",
					// element: <AboutPage />,
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
					<Outlet />
					{/* <Footer/> */}
				</>
			),
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					// element: <ProfilePage />,
				},
				{
					path: "account",
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
			element: (
				<>
					{/* <NavBar /> */}
					{/* <DashboardNav /> */}
					<Outlet />
				</>
			),
			// errorElement: <ErrorPage/>,
			children: [
				{
					path: "",
					// element: <DashboardPage />,
				},
				{
					path: "order",
					element: <DashOrderPage />,
				},
				{
					path: "order/view-order",
					element: <DashOrderViewPage />,
				},
				{
					path: "customer",
					// element: <DashCustomerPage />,
				},
				{
					path: "customer/view-customer",
					// element: <DashCustomerViewPage />,
				},
				{
					path: "product",
					// element: <DashProductPage />,
				},
				{
					path: "product/add-product",
					element: <DashProductAddPage reload={reload} />,
				},
				{
					path: "product/edit-product/:id",
					element: <DashProductAddPage />,
				},
				{
					path: "product/view-product",
					element: <DashProductViewPage />,
				},
				{
					path: "admin",
					// element: <DashAdminPage />,
				},
				{
					path: "admin/admin-setting",
					// element: <DashAdminSettingPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
