import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Banner({ h1, h3 }) {
	return (
		<div className="flex flex-col justify-center items-center w-full h-[300px] bg-cover bg-center bg-[url('/images/banner-image.png')]">
			<h1 className=" my-8 ">{h1}</h1>
			<h3 className="flex gap-2">
				<Link to={"/"} className="hover:text-[#939d73]">
					Home
				</Link>
				&gt;
				<p className="hover:text-[#939d73]">{h3}</p>
			</h3>
		</div>
	);
}

Banner.propTypes = {
	h1: PropTypes.string,
	h3: PropTypes.string,
};
