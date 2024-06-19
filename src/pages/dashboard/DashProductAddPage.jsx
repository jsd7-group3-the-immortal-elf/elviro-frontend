import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import DashImageInputMain from "../../components/dashboard/DashImageInputMain";
import DashImageInput from "../../components/dashboard/DashImageInput";

export default function DashProductAddPage({ reload }) {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	async function createProduct() {
		try {
			await axios.post("https://store-crud.onrender.com/api/product/", product);
		} catch (error) {
			console.error("Failed to create data:", error);
		}
	}

	async function getProduct(id) {
		try {
			const response = await axios.get(
				"https://store-crud.onrender.com/api/product/" + id
			);
			const data = await response.data;
			setProduct(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function editProduct() {
		try {
			await axios.put(
				"https://store-crud.onrender.com/api/product/" + id,
				product
			);
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
		setProduct((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (id) {
			await editProduct();
		} else {
			await createProduct();
		}

		location.href = "http://localhost:5173/dashboard/product";
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
					<section className="bg-white flex gap-8 p-6 rounded-xl w-2/3">
						<div className="flex flex-col gap-6 w-1/2">
							<input
								type="text"
								placeholder="Product Name"
								name="name"
								value={product.name}
								onChange={handleChange}
								required
								className="dash-input"
							/>
							<select
								name="room"
								// onChange={handleChange}
								required
								className="dash-input"
							>
								<option value="">Select Room</option>
								<option value="Bedroom">Bedroom</option>
								<option value="Living Room">Living Room</option>
								<option value="Kitchen">Kitchen</option>
							</select>
							<select
								name="category"
								// onChange={handleChange}
								required
								className="dash-input"
							>
								<option value="">Select Category</option>
								<option value="Bed">Bed</option>
								<option value="Table">Table</option>
								<option value="Chair">Chair</option>
								<option value="Storage">Storage</option>
							</select>
							<div className="flex gap-6">
								<input
									type="number"
									min={0}
									placeholder="Selling Price"
									name="price"
									value={product.price}
									onChange={handleChange}
									required
									className="dash-input w-1/2"
								/>
								<input
									type="number"
									min={0}
									placeholder="Cost Price"
									name="cost"
									// onChange={handleChange}
									required
									className="dash-input w-1/2"
								/>
							</div>
							<input
								type="number"
								min={0}
								placeholder="Quantity in Stock"
								name="quantity"
								value={product.quantity}
								onChange={handleChange}
								required
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Width (cm)"
								name="width"
								// onChange={handleChange}
								required
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Length (cm)"
								name="length"
								// onChange={handleChange}
								required
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Height (cm)"
								name="height"
								// onChange={handleChange}
								required
								className="dash-input"
							/>
							<input
								type="number"
								min={0}
								placeholder="Warranty"
								name="waranty"
								// onChange={handleChange}
								required
								className="dash-input"
							/>
						</div>

						<div className="w-1/2">
							<textarea
								placeholder="Product Description"
								name="description"
								value={product.description}
								onChange={handleChange}
								required
								className="dash-input w-full h-1/2"
							></textarea>
						</div>
					</section>

					<section className="bg-white flex flex-col gap-4 p-6 rounded-xl w-1/3 h-[calc(100vh-176px)] overflow-y-scroll">
						<DashImageInputMain product={product} />

						{product.image && <h5>Additional Images (max 4)</h5>}

						<div className="grid grid-cols-2 gap-4">
							{product.image && <DashImageInput product={product} />}
							{product.image && <DashImageInput product={product} />}
							{product.image && <DashImageInput product={product} />}
							{product.image && <DashImageInput product={product} />}
						</div>
					</section>
				</main>
			</form>
		</div>
	);
}

DashProductAddPage.propTypes = {
	reload: PropTypes.bool,
};
