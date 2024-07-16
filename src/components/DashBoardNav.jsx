import { Link } from "react-router-dom";
import {
	FaChartLine,
	FaCartShopping,
	FaCirclePlus,
	FaBox,
} from "react-icons/fa6";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function DashBoardNav({ reload, setReload }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<div className="hidden xl:flex bg-white h-[calc(100vh-64px)] p-6 fixed w-72 top-16 left-0">
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
				</ul>
			</div>
		</>
	);
}

DashBoardNav.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
