import { useState } from "react";
import PropTypes from "prop-types";
import { FaCloudArrowUp, FaImage, FaTrash } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import uploadImage from "../../utils/cloudinaryConfig";

export default function DashImageInputMain({ image, setImage, setProduct }) {
	const [loading, setLoading] = useState(false);

	async function addImg(e) {
		const img = e.target.files[0];
		if (img) {
			try {
				setLoading(true);
				const url = await uploadImage(img);

				setImage(url);
				setProduct((prev) => {
					return { ...prev, productImage: url };
				});
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.error("Error uploading img:", error);
			}
		}
	}

	function deleteImg() {
		setImage("");
	}

	return (
		<>
			{image ? (
				<div className="aspect-square relative">
					<div
						onClick={deleteImg}
						className="absolute top-3 right-3 p-3 bg-white/70 rounded-lg hover:rounded-[50%]"
					>
						<FaTrash />
					</div>
					<img src={image} className="aspect-square rounded-xl" />
				</div>
			) : (
				<label className="dash-input aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
					{loading ? (
						<p className="flex flex-col items-center">
							<CgSpinner className="text-5xl text-green animate-spin" />
							Loading...
						</p>
					) : (
						<>
							<FaImage className="text-5xl" />
							<p className="flex items-center gap-2">
								<FaCloudArrowUp /> Upload Image
							</p>
							<div className="flex flex-col items-center text-neutral-500 gap-1">
								<p className="text-sm">
									Upload a cover image for your product.
								</p>
								<p className="text-xs flex items-center">
									Recommend Size 600 x 600 px (1:1)
								</p>
							</div>
							<input
								type="file"
								name="image"
								accept="image/*"
								className="h-full w-full absolute opacity-0"
								onChange={addImg}
							/>
						</>
					)}
				</label>
			)}
		</>
	);
}

DashImageInputMain.propTypes = {
	image: PropTypes.string,
	setImage: PropTypes.func,
	setProduct: PropTypes.func,
};
