import { Link } from "react-router-dom";
import {
    FaCircleUser,
    FaGear,
    FaCreditCard,
    FaBagShopping,
    FaHeart
} from "react-icons/fa6";

function ProfileNav() {
    return (
        <div>
            <h1 className="text-4xl w-11/12 xl:w-4/5 lg:justify-start">My Account</h1>
            <section className="py-8">
            <picture className="h-8 lg:h-auto xl:w-2/3">
                <img
                    src="/images/contact.png"
                    alt="Profile Image"
                    className="rounded-full"
                />
            </picture>
            <nav className=" bg-[#ccccca] p-4 rounded-3xl w-full">
                <ul className="flex flex-col w-full h-full gap-2">
                    <li className="rounded-full flex items-center">
                        <Link to="/profile" className="w-full h-full px-4 py-2 rounded-full hover:bg-orange-200 flex items-center gap-2"
                        > <FaCircleUser /> Profile
                        </Link>
                    </li>
                    <li className="rounded-full flex items-center">
                        <Link to="/profile/account"
                            className="w-full h-full px-4 py-2 text-md rounded-full hover:bg-orange-200 flex items-center gap-2"
                        > <FaGear /> Account
                        </Link>
                    </li>
                    <li className="rounded-full flex items-center">
                        <Link to="/profile/payment"
                            className="w-full h-full px-4 py-2 rounded-full hover:bg-orange-200 flex items-center gap-2"
                        > <FaCreditCard />Payment
                        </Link>
                    </li>
                    <li className="rounded-full flex items-center">
                        <Link to="/profile/history"
                            className="w-full h-full px-4 py-2 rounded-full hover:bg-orange-200 flex items-center gap-2"
                        > <FaBagShopping /><span className="hidden md:block lg:inline">Purchase History</span>
                        </Link>
                    </li>
                    <li className="rounded-full flex items-center">
                        <Link to="/profile/wishist"
                            className="w-full h-full px-4 py-2 rounded-full hover:bg-orange-200 flex items-center gap-2"
                        > <FaHeart />
                            Wishlists
                        </Link>
                    </li>
                </ul>
            </nav>
    </section>
    </div>
)}
export default ProfileNav