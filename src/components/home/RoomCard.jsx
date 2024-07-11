import { Link } from "react-router-dom";

function RoomCard() {
	const roomCard = [{}];
	return (
		<div>
			<section className="flex flex-col items-center gap-6 p-6 md:p-12">
				<h2>Browse By Room</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<div className="flex gap-8 w-full p-3 pb-8 overflow-x-scroll md:overflow-auto">
					<Link
						to="/shop"
						className="flex flex-col items-center gap-4 min-w-52"
					>
						<picture className="rounded-3xl hover:shadow-[0_0_10px_1px_rgb(150,150,150)]">
							<img
								src="images/Cart-hero-image 1.png"
								alt="Bedroom"
								className="hover:scale-110 hover:duration-500"
							/>
						</picture>
						<h3>Bedroom</h3>
					</Link>
					<Link to="shop"
						className="flex flex-col items-center gap-4 min-w-52"
					>
						<picture className="rounded-3xl hover:shadow-[0_0_10px_1px_rgb(150,150,150)]">
							<img
								src="images/Cart-hero-image 1.png"
								alt="Living Room"
								className="hover:scale-110 hover:duration-500"
							/>
						</picture>
						<h3>Living Room</h3>
					</Link>
					<Link to="shop"
						className="flex flex-col items-center gap-4 min-w-52"
					>
						<picture className="rounded-3xl hover:shadow-[0_0_10px_1px_rgb(150,150,150)]">
							<img
								src="images/Cart-hero-image 1.png"
								alt="Kitchen"
								className="hover:scale-110 hover:duration-500"
							/>
						</picture>
						<h3>Kitchen</h3>
					</Link>
				</div>
			</section>
		</div>
	);
}
export default RoomCard;
