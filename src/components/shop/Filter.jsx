import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function Filter({ handleFilter }) {
	const maxPrice = 20000;
	const maxWidth = 300;
	const maxDepth = 300;
	const maxDepthExtent = 300;
	const maxHeight = 300;

	// const [room, setRoom] = useState({
	// 	Bedroom: false,
	// 	"Living Room": false,
	// 	Kitchen: false,
	// });
	// const [category, setCategory] = useState({
	// 	Bed: false,
	// 	Seat: false,
	// 	Table: false,
	// 	Storage: false,
	// });

	const [priceRange, setPriceRange] = useState([0, maxPrice]);
	const [widthRange, setWidthRange] = useState([0, maxWidth]);
	const [depthRange, setDepthRange] = useState([0, maxDepth]);
	const [depthExtentRange, setDepthExtentRange] = useState([0, maxDepthExtent]);
	const [heightRange, setHeightRange] = useState([0, maxHeight]);

	function mask(max) {
		const Mark = [
			{
				value: 0,
				label: "0",
			},
			{
				value: max,
				label: `${max}`,
			},
		];
		return Mark;
	}

	function handleChange(e, newValueArr) {
		const { name } = e.target;
		switch (name) {
			/*
			case "sort":
				setRoom((prev) => {
					return { ...prev, [name]: value };
				});
				break;
			case "rooms":
				setRoom((prev) => {
					const newRoom = { ...prev, [value]: e.target.checked };
					const newArr = [];
					setFilter((prev) => {
						for (let key in newRoom) {
							if (newRoom[key] == true) {
								newArr.push(key);
							}
						}
						return { ...prev, rooms: newArr };
					});
					return newRoom;
				});
				break;
			case "category":
				setCategory((prev) => {
					const newCate = { ...prev, [value]: e.target.checked };
					const newArr = [];
					setFilter((prev) => {
						for (let key in newCate) {
							if (newCate[key] == true) {
								newArr.push(key);
							}
						}
						return { ...prev, category: newArr };
					});
					return newCate;
				});
				break;
			*/
			case "price":
				setPriceRange(newValueArr);
				break;
			case "width":
				setWidthRange(newValueArr);
				break;
			case "depth":
				setDepthRange(newValueArr);
				break;
			case "depthExtent":
				setDepthExtentRange(newValueArr);
				break;
			case "height":
				setHeightRange(newValueArr);
				break;

			default:
				// setFilter((prev) => {
				// 	return { ...prev, [name]: value };
				// });
				break;
		}
	}

	function handleReset() {
		setPriceRange([0, maxPrice]);
		setWidthRange([0, maxWidth]);
		setDepthRange([0, maxDepth]);
		setDepthExtentRange([0, maxDepthExtent]);
		setHeightRange([0, maxHeight]);
	}

	return (
		<section
			id="sub-filter"
			className="fixed top-0 left-0 z-50 bg-black/50 w-full h-full"
		>
			<form className="relative w-full h-full md:w-96 mt-20 md:mt-0 flex flex-col bg-white rounded-t-xl md:rounded-s-none md:rounded-r-xl overflow-hidden">
				<div className="py-6 text-center border-b relative bg-lightgreen">
					<span>Filter and Sort</span>
					<FaXmark
						onClick={handleFilter}
						className="text-xl absolute top-6 right-6 cursor-pointer"
					/>
				</div>

				<ul className="w-full bg-white overflow-y-scroll">
					<li className="border-b">
						<button className="w-full h-16 border-b">Sort by</button>
						<div className="flex flex-col bg-neutral-100">
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="radio"
									name="sort"
									value="price+asc"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Price: low to high
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="radio"
									name="sort"
									value="price+desc"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Price: high to low
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="radio"
									name="sort"
									value="name+asc"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Name
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="radio"
									name="sort"
									value="createOn+asc"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Newest
							</label>
						</div>
					</li>

					<li className="border-b">
						<button className="w-full h-16 border-b">Room</button>
						<div className="flex flex-col bg-neutral-100">
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="rooms"
									value="Bedroom"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Bedroom
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="rooms"
									value="Living Room"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Living Room
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="rooms"
									value="Kitchen"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Kitchen
							</label>
						</div>
					</li>

					<li className="border-b">
						<button className="w-full h-16 border-b">Category</button>
						<div className="flex flex-col bg-neutral-100">
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="category"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Bed
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="category"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Seat
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="category"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Table
							</label>
							<hr />
							<label className="flex items-center gap-4 ml-8 h-16 accent-lime-600 cursor-pointer">
								<input
									type="checkbox"
									name="category"
									onChange={handleChange}
									className="w-4 h-4"
								/>
								Storage
							</label>
						</div>
					</li>

					<li className="border-b">
						<button className="w-full h-16 border-b">Price (THB)</button>
						<div className="flex flex-col items-center py-4 bg-neutral-100">
							<Box sx={{ width: 300 }}>
								<Slider
									getAriaLabel={() => "Price range"}
									name="price"
									value={priceRange}
									max={maxPrice}
									onChange={handleChange}
									valueLabelDisplay="auto"
									marks={mask(maxPrice)}
									sx={{
										color: "#b5c18e",
									}}
								/>
							</Box>
						</div>
					</li>

					<li className="border-b">
						<button className="w-full h-16 border-b">Dimension</button>
						<div className="flex flex-col items-center gap-4 py-4 bg-neutral-100">
							<Box sx={{ width: 300 }}>
								<Typography gutterBottom>Width (cm)</Typography>
								<Slider
									getAriaLabel={() => "Width range"}
									name="width"
									value={widthRange}
									max={maxWidth}
									onChange={handleChange}
									valueLabelDisplay="auto"
									marks={mask(maxWidth)}
									sx={{
										color: "#b5c18e",
									}}
								/>
							</Box>
							<hr />
							<Box sx={{ width: 300 }}>
								<Typography gutterBottom>Depth (cm)</Typography>
								<Slider
									getAriaLabel={() => "Depth range"}
									name="depth"
									value={depthRange}
									max={maxDepth}
									onChange={handleChange}
									valueLabelDisplay="auto"
									marks={mask(maxDepth)}
									sx={{
										color: "#b5c18e",
									}}
								/>
							</Box>
							<hr />
							<Box sx={{ width: 300 }}>
								<Typography gutterBottom>Depth Extent (cm)</Typography>
								<Slider
									getAriaLabel={() => "Depth Extent range"}
									name="depthExtent"
									value={depthExtentRange}
									max={maxDepthExtent}
									onChange={handleChange}
									valueLabelDisplay="auto"
									marks={mask(maxDepthExtent)}
									sx={{
										color: "#b5c18e",
									}}
								/>
							</Box>
							<hr />
							<Box sx={{ width: 300 }}>
								<Typography gutterBottom>Height (cm)</Typography>
								<Slider
									getAriaLabel={() => "Height range"}
									name="height"
									value={heightRange}
									max={maxHeight}
									onChange={handleChange}
									valueLabelDisplay="auto"
									marks={mask(maxHeight)}
									sx={{
										color: "#b5c18e",
									}}
								/>
							</Box>
						</div>
					</li>
				</ul>
				<div className="flex gap-4 p-6 text-center w-full bg-white">
					<button
						type="submit"
						className="bg-green hover:bg-darkgreen p-4 w-1/2 rounded-xl"
					>
						Filter
					</button>
					<button
						type="reset"
						onClick={handleReset}
						className="bg-neutral-200 hover:bg-neutral-300 p-4 w-1/2 rounded-xl"
					>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
}

Filter.propTypes = {
	handleFilter: PropTypes.func,
};
