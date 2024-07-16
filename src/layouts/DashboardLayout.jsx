import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import DashBoardNav from "../components/DashBoardNav";
import NavBar from "../components/NavBar";

export default function DashboardLayout({ reload, setReload }) {
	return (
		<>
			<div className="bg-neutral-100 xl:hidden h-screen flex justify-center items-center">
				<h1 className="font-bold text-center m-8 leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					Please open on devices with a screen width of 1280px or more.
				</h1>
			</div>
			<div className="hidden xl:flex flex-col">
				<NavBar />
				<DashBoardNav reload={reload} setReload={setReload} />
				<Outlet />
			</div>
		</>
	);
}

DashboardLayout.propTypes = {
	reload: PropTypes.bool,
	setReload: PropTypes.func,
};
