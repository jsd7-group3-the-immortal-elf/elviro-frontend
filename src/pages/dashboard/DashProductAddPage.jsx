import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";
import DashImageInputMain from "../../components/dashboard/DashImageInputMain";

export default function DashProductAddPage({ reload }) {
	const [product, setProduct] = useState({});
	const [dimension, setDimension] = useState({});
	const [rooms, setRooms] = useState({
		Bedroom: false,
		"Living Room": false,
		Kitchen: false,
	});

	const { id } = useParams();

	async function createProduct() {
		try {
			await axiosInstance.post("/products", product);
		} catch (error) {
			console.error("Failed to create data:", error);
		}
	}

	async function getProduct(id) {
		try {
			const response = await axiosInstance.get(`/products/${id}`);
			const { data } = await response.data;
			setProduct(data);
			setDimension(data.dimension);

			for (let i = 0; i < data.rooms.length; i++) {
				rooms[data.rooms[i]] = true;
			}
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function editProduct() {
		try {
			await axiosInstance.patch(`/products/${id}`, product);
		} catch (error) {
			console.error("Failed to edit data:", error);
		}
	}

	useEffect(() => {
		if (id) {
			getProduct(id);
		}
	}, [id]);

	if (reload) {
		location.reload();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		if (name == "width" || name == "depth" || name == "height") {
			setDimension((prev) => {
				const newDimension = { ...prev, [name]: value };
				setProduct((prev) => {
					return { ...prev, dimension: newDimension };
				});
				return newDimension;
			});
		} else if (name == "rooms") {
			setRooms((prev) => {
				const newRooms = { ...prev, [value]: e.target.checked };
				const newArr = [];
				setProduct((prev) => {
					for (let key in newRooms) {
						if (newRooms[key] == true) {
							newArr.push(key);
						}
					}
					return { ...prev, rooms: newArr };
				});
				return newRooms;
			});
		} else {
			setProduct((prev) => {
				return { ...prev, [name]: value };
			});
		}
		console.log(product);
	}

	// ()=>{setProduct(dimension:{width: e.target.value})}

	async function handleSubmit(e) {
		e.preventDefault();

		if (id) {
			await editProduct();
		} else {
			await createProduct();
		}
		location.href = `${import.meta.env.VITE_FRONTEND_URL}/dashboard/product`;
	}

	return (
		<div className="bg-neutral-100 pl-80 p-6 flex flex-col gap-6 h-[calc(100vh-64px)]">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
				<header className="flex justify-between items-center">
					<h4>{id ? "Edit Product" : "New Product"}</h4>
					<button
						type="submit"
						className="bg-green text-white px-4 py-2 rounded-lg hover:bg-darkgreen"
					>
						Save & Publish
					</button>
				</header>

				<main className="flex gap-6 h-full">
					<section className="bg-white flex gap-8 p-6 rounded-xl w-2/3 h-[calc(100vh-176px)]">
						<div className="flex flex-col gap-4 w-1/2">
							<label className="w-full">
								Product Name
								<input
									type="text"
									placeholder="Product Name"
									name="productName"
									value={product.productName}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
							<label className="w-full">
								Rooms
								<div className="dash-input w-full flex flex-col gap-2">
									<label className="w-full flex items-center gap-4">
										<input
											type="checkbox"
											name="rooms"
											value="Bedroom"
											checked={rooms.Bedroom}
											onChange={handleChange}
										/>
										Bedroom
									</label>
									<label className="w-full flex items-center gap-4">
										<input
											type="checkbox"
											name="rooms"
											value="Living Room"
											checked={rooms["Living Room"]}
											onChange={handleChange}
										/>
										Living Room
									</label>
									<label className="w-full flex items-center gap-4">
										<input
											type="checkbox"
											name="rooms"
											value="Kitchen"
											checked={rooms.Kitchen}
											onChange={handleChange}
										/>
										Kitchen
									</label>
								</div>
							</label>

							<label className="w-full">
								Category
								<select
									name="category"
									value={product.category}
									onChange={handleChange}
									required
									className="dash-input w-full"
								>
									<option value="">Select Category</option>
									<option value="Bed">Bed</option>
									<option value="Table">Table</option>
									<option value="Chair">Chair</option>
									<option value="Storage">Storage</option>
								</select>
							</label>
							<label className="w-full">
								Color
								<input
									type="text"
									placeholder="Color"
									name="color"
									value={product.color}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
							<div className="flex gap-6">
								<label className="w-1/2">
									Price
									<input
										type="number"
										min={0}
										placeholder="Selling Price"
										name="price"
										value={product.price}
										onChange={handleChange}
										required
										className="dash-input w-full"
									/>
								</label>
								<label className="w-1/2">
									Cost
									<input
										type="number"
										min={0}
										placeholder="Cost Price"
										name="cost"
										value={product.cost}
										onChange={handleChange}
										required
										className="dash-input w-full"
									/>
								</label>
							</div>
							<label className="w-full">
								Stock
								<input
									type="number"
									min={0}
									placeholder="Quantity in Stock"
									name="stock"
									value={product.stock}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
							<label className="w-full">
								Warranty
								<input
									type="number"
									min={0}
									placeholder="Warranty"
									name="warranty"
									value={product.warranty}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
						</div>

						<div className="flex flex-col gap-4 w-1/2">
							<label className="w-full h-1/2 pb-6">
								Description
								<textarea
									placeholder="Product Description"
									name="description"
									value={product.description}
									onChange={handleChange}
									required
									className="dash-input w-full h-full"
								></textarea>
							</label>
							<label className="w-full">
								Width (cm)
								<input
									type="number"
									min={0}
									step={0.01}
									placeholder="Width (cm)"
									name="width"
									value={dimension.width}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
							<label className="w-full">
								Depth (cm)
								<input
									type="number"
									min={0}
									step={0.01}
									placeholder="Depth (cm)"
									name="depth"
									value={dimension.depth}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
							<label className="w-full">
								Height (cm)
								<input
									type="number"
									min={0}
									step={0.01}
									placeholder="Height (cm)"
									name="height"
									value={dimension.height}
									onChange={handleChange}
									required
									className="dash-input w-full"
								/>
							</label>
						</div>
					</section>

					<section className="bg-white flex flex-col gap-4 p-6 rounded-xl w-1/3 h-[calc(100vh-176px)] overflow-y-scroll">
						<DashImageInputMain product={product} />
					</section>
				</main>
			</form>
		</div>
	);
}

DashProductAddPage.propTypes = {
	reload: PropTypes.bool,
};
