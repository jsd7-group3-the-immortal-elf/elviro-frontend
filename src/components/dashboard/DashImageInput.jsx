import PropTypes from "prop-types";
import { FaCloudArrowUp, FaImage } from "react-icons/fa6";

export default function DashImageInput({ product }) {
	return (
		<>
			{product.image ? (
				<picture className="rounded-xl">
					<img src={product.image} className="aspect-square" />
				</picture>
			) : (
				<label className="dash-input aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
					<FaImage className="text-5xl" />
					<p className="flex items-center gap-2 text-sm">
						<FaCloudArrowUp /> Upload Image
					</p>
					<input
						type="file"
						name="image"
						accept="image/*"
						className="h-full w-full absolute opacity-0"
					/>
				</label>
			)}
		</>
	);
}

DashImageInput.propTypes = {
	product: PropTypes.object,
};
