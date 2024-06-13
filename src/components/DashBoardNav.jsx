// import { Link } from "react-router-dom";
import {
	FaChartLine,
	FaShoppingCart,
	FaUserFriends,
	FaPlusCircle,
	FaBox,
	FaUserCircle,
	FaCog,
} from "react-icons/fa";

export default function DashBoardNav() {
	return (
		<div className="bg-white w-72 h-screen p-6">
			<ul className="flex flex-col gap-6">
				<ul className="flex flex-col gap-2">
					<li className="text-xs px-4">MAIN MENU</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaChartLine />
							Dashboard
						</a>
					</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaShoppingCart />
							Order Management
						</a>
					</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaUserFriends />
							Customers
						</a>
					</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li className="text-xs px-4">PRODUCTS</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaPlusCircle />
							Add Products
						</a>
					</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaBox />
							Product
						</a>
					</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li className="text-xs px-4">ADMIN</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaUserCircle />
							Manage Admins
						</a>
					</li>
					<li className="rounded px-4 py-2 hover:bg-green">
						<a className="flex items-center gap-2">
							<FaCog />
							Admin Roles
						</a>
					</li>
				</ul>
			</ul>
		</div>
	);
}
