import { Link } from "react-router-dom";
import {
	FaCircleUser,
	FaGear,
	FaCreditCard,
	FaBagShopping,
} from "react-icons/fa6";

function ProfileNav() {
	return (
		<section className="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-8 lg:w-2/5 xl:w-1/4">
			<picture className="w-1/2 h-1/2 lg:h-auto xl:w-2/3">
				<img
					src="/images/contact.png"
					alt="Profile Image"
					className="rounded-full"
				/>
			</picture>

			<nav className="hidden sm:flex bg-white p-4 rounded-3xl w-full">
				<ul className="flex flex-col gap-2 w-full">
					<li className="rounded-full">
						<Link
							to="/profile"
							className="flex items-center gap-4 w-full h-full px-4 py-2 rounded-full hover:bg-orange-200"
						>
							<FaCircleUser />
							Profile
						</Link>
					</li>
					<li className="rounded-full">
						<Link
							to="/profile/account"
							className="flex items-center gap-4 w-full h-full px-4 py-2 rounded-full hover:bg-orange-200"
						>
							<FaGear />
							Account
						</Link>
					</li>
					<li className="rounded-full">
						<Link
							to="/profile/payment"
							className="flex items-center gap-4 w-full h-full px-4 py-2 rounded-full hover:bg-orange-200"
						>
							<FaCreditCard />
							Payment
						</Link>
					</li>
					<li className="rounded-full">
						<Link
							to="/profile/order-history"
							className="flex items-center gap-4 w-full h-full px-4 py-2 rounded-full hover:bg-orange-200"
						>
							<FaBagShopping />
							Purchase History
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}
export default ProfileNav;
