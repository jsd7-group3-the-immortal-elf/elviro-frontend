// import React from "react";
import { FaTrophy, FaRegHandshake, FaTruck, FaHeadset } from "react-icons/fa";

export default function Motto() {
	return (
		<div>
			<section className="max-md:hidden flex justify-center items-center bg-lightgreen h-fit gap-10 px-16 py-6">
				<div className="flex align-center ">
					<FaTrophy className="text-5xl my-auto mr-4" />
					<article>
						<h4 className="text-xl font-semibold">High Quality</h4>
						<h4>crafted from top materials</h4>
					</article>
				</div>
				<div className="flex align-center">
					<FaRegHandshake className="text-5xl my-auto mr-4" />
					<article>
						<h4 className="text-xl font-semibold">Warranty Protection</h4>
						<h4>Over 2 years</h4>
					</article>
				</div>
				<div className="flex align-center">
					<FaTruck className="text-5xl my-auto mr-4" />
					<article>
						<h4 className="text-xl font-semibold">Free Shipping</h4>
						<h4>Order over 1000 Baht</h4>
					</article>
				</div>
				<div className="flex align-center">
					<FaHeadset className="text-5xl my-auto mr-4" />
					<article>
						<h4 className="text-xl font-semibold">24 / 7 Support</h4>
						<h4>Dedicated support</h4>
					</article>
				</div>
			</section>
		</div>
	);
}
