import { Link } from "react-router-dom";
import {
	FaChartLine,
	FaCartShopping,
	FaUserGroup,
	FaCirclePlus,
	FaBox,
	FaCircleUser,
	FaGear,
} from "react-icons/fa6";
import PropTypes from "prop-types";

export default function DashBoardNav({ reload, setReload }) {
	return (
		<>
			<div className="bg-neutral-100 xl:hidden h-screen flex justify-center items-center">
				<h1 className="font-bold text-center m-8 leading-relaxed">
					Please open on devices with a screen width of 1280px or more.
				</h1>
			</div>

			<div className="hidden xl:flex bg-white h-[calc(100vh-64px)] p-6 fixed w-72 top-0 left-0">
				<ul className="flex flex-col gap-6">
					<ul className="flex flex-col gap-2">
						<li className="text-xs px-4 flex justify-between">
							<span className="flex">MAIN MENU</span>
						</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaChartLine />
								<span className="flex">Dashboard</span>
							</Link>
						</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/order"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaCartShopping />
								<span className="flex">Order Management</span>
							</Link>
						</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/customer"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaUserGroup />
								<span className="flex">Customers</span>
							</Link>
						</li>
					</ul>

					<ul className="flex flex-col gap-2">
						<li className="text-xs px-4">PRODUCTS</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/product/add-product"
								onClick={() => {
									setReload(!reload);
								}}
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaCirclePlus />
								<span className="flex">Add Products</span>
							</Link>
						</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/product"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaBox />
								<span className="flex">Product</span>
							</Link>
						</li>
					</ul>

					<ul className="flex flex-col gap-2">
						<li className="text-xs px-4">ADMIN</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/admin"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaCircleUser />
								<span className="flex">Manage Admins</span>
							</Link>
						</li>
						<li className="rounded hover:bg-green">
							<Link
								to="/dashboard/admin/admin-setting"
								className="flex items-center gap-2 px-4 py-2"
							>
								<FaGear />
								<span className="flex">Admin Roles</span>
							</Link>
						</li>
					</ul>
				</ul>
			</div>
		</>
	);
}

DashBoardNav.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
