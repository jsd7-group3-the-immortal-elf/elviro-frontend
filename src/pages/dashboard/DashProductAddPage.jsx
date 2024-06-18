import { FaCloudArrowUp, FaImage } from "react-icons/fa6";

export default function DashProductAddPage() {
	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 h-[calc(100vh-64px)]">
			<form action="#" className="flex flex-col gap-4">
				<header className="flex justify-between">
					<h4>New Product</h4>
					<button
						type="submit"
						className="bg-green text-white px-4 py-2 rounded-lg"
					>
						Save & Publish
					</button>
				</header>

				<main className="flex gap-6">
					<section className="bg-white flex gap-8 p-6 rounded-xl w-2/3">
						<div className="flex flex-col gap-6 w-1/2">
							<input
								type="text"
								placeholder="Product Name"
								className="dash-input"
							/>
							<select name="" id="" className="dash-input">
								<option value="">Select Room</option>
								<option value="">Bedroom</option>
								<option value="">Living Room</option>
								<option value="">Kitchen</option>
							</select>
							<select name="" id="" className="dash-input">
								<option value="">Select Category</option>
								<option value="">Bed</option>
								<option value="">Table</option>
								<option value="">Chair</option>
								<option value="">Storage</option>
							</select>
							<div className="flex gap-6">
								<input
									type="number"
									min={0}
									placeholder="Selling Price"
									className="dash-input w-1/2"
								/>
								<input
									type="number"
									min={0}
									placeholder="Cost Price"
									className="dash-input w-1/2"
								/>
							</div>
							<input
								type="number"
								min={0}
								placeholder="Quantity in Stock"
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Width (cm)"
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Length (cm)"
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Height (cm)"
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Warranty"
								className="dash-input"
							/>
						</div>

						<div className="w-1/2">
							<textarea
								name=""
								id=""
								placeholder="Product Description"
								className="dash-input w-full h-1/2"
							></textarea>
						</div>
					</section>

					<section className="bg-white flex flex-col gap-4 p-6 rounded-xl w-1/3">
						<label className="dash-input h-1/2 aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
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
								name="img"
								id="img"
								accept="image/*"
								className="h-full w-full absolute opacity-0"
							/>
						</label>

						<h5>Additional Images</h5>

						<div className="flex gap-4">
							<label className="dash-input w-1/2 aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
								<FaImage className="text-5xl" />
								<p className="flex items-center gap-2 text-sm">
									<FaCloudArrowUp /> Upload Image
								</p>
								<input
									type="file"
									name="img"
									id="img"
									accept="image/*"
									className="h-full w-full absolute opacity-0"
								/>
							</label>
							<label className="dash-input w-1/2 aspect-square flex flex-col justify-center items-center text-green gap-4 relative">
								<FaImage className="text-5xl" />
								<p className="flex items-center gap-2 text-sm">
									<FaCloudArrowUp /> Upload Image
								</p>
								<input
									type="file"
									name="img"
									id="img"
									accept="image/*"
									className="h-full w-full absolute opacity-0"
								/>
							</label>
						</div>
					</section>
				</main>
			</form>
		</div>
	);
}
