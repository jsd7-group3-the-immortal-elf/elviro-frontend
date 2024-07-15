import { Link } from "react-router-dom";

function ButtonShowmore() {
	return (
		<div className="flex justify-center items-center h-full mb-6 md:mb-12">
			<Link
				to="/shop"
				className="border border-[#b9c590] py-3 px-6 hover:bg-neutral-100 rounded inline-block"
			>
				Show more
			</Link>
		</div>
	);
}
export default ButtonShowmore;
