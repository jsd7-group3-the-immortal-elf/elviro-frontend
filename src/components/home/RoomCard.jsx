import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RoomCard({ image, room }) {
	return (
		<Link
			to="/shop"
			key={room}
			className="flex flex-col items-center gap-4 min-w-52"
		>
			<picture className="rounded-3xl hover:shadow-[0_0_10px_1px_rgb(150,150,150)]">
				<img
					src={image}
					alt={room}
					className="hover:scale-110 hover:duration-500"
				/>
			</picture>
			<h3>{room}</h3>
		</Link>
	);
}
// export default RoomCard;
