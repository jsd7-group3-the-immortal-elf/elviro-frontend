import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardNav from "./components/DashBoardNav";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					{/* <NavBar /> */}
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
					// element: <CartPage />,
				},
				{
					path: "cart/checkout",
					// element: <CheckoutPage />,
				},
				{
					path: "cart/checkout/purchased",
					// element: <PurchasedPage />,
				},
				{
					path: "contact",
					// element: <ContactPage />,
				},
				{
					path: "about",
					// element: <AboutPage />,
				},
			],
		},

		{
			path: "/profile",
			element: (
				<>
					{/* <NavBar /> */}
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
					// element: <ProfileAccountPage />,
				},
				{
					path: "payment",
					// element: <ProfilePaymentPage />,
				},
				{
					path: "order-history",
					// element: <ProfileHistoryPage />,
				},
				{
					path: "wishlist",
					// element: <ProfileWishlistPage />,
				},
				{
					path: "create-account",
					// element: <CreateAccountPage />,
				},
				{
					path: "login",
					// element: <LoginPage />,
				},
				{
					path: "forget-password",
					// element: <ForgetPage />,
				},
				{
					path: "reset",
					// element: <ResetPage />,
				},
			],
		},

		{
			path: "/dashboard",
			element: (
				<>
					{/* <NavBar /> */}
					<DashboardNav />
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
					// element: <DashOrderPage />,
				},
				{
					path: "order/view-order",
					// element: <DashOrderViewPage />,
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
					// element: <DashProductAddPage />,
				},
				{
					path: "product/view-product",
					// element: <DashProductViewPage />,
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
