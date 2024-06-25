import PropTypes from "prop-types";
import { FaCloudArrowUp, FaImage } from "react-icons/fa6";

export default function DashImageInputMain({ product }) {
	return (
		<>
			{product.image ? (
				<div className="aspect-square">
					<img src={product.image} className="aspect-square rounded-xl" />
				</div>
			) : (
				<label className="dash-input h-1/2 aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
					<FaImage className="text-5xl" />
					<p className="flex items-center gap-2">
						<FaCloudArrowUp /> Upload Image
					</p>
					<div className="flex flex-col items-center text-neutral-500 gap-1">
						<p className="text-sm">Upload a cover image for your product.</p>
						<p className="text-xs flex items-center">
							Recommend Size 600 x 600 px (1:1)
						</p>
					</div>
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

DashImageInputMain.propTypes = {
	product: PropTypes.object,
};
