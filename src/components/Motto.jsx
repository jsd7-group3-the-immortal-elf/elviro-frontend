// import React from "react";
import { FaTrophy, FaRegHandshake, FaTruck, FaHeadset } from "react-icons/fa6";

export default function Motto() {
	return (
		<div>
			<section className="hidden lg:flex  justify-center items-center bg-lightgreen gap-10 px-16 py-6">
				<div className="flex">
					<FaTrophy className="text-5xl my-auto mr-4" />
					<article>
						<h4>High Quality</h4>
						<p>crafted from top materials</p>
					</article>
				</div>
				<div className="flex">
					<FaRegHandshake className="text-5xl my-auto mr-4" />
					<article>
						<h4>Warranty Protection</h4>
						<p>Over 2 years</p>
					</article>
				</div>
				<div className="flex">
					<FaTruck className="text-5xl my-auto mr-4" />
					<article>
						<h4>Free Shipping</h4>
						<p>Order over 1000 Baht</p>
					</article>
				</div>
				<div className="flex">
					<FaHeadset className="text-5xl my-auto mr-4" />
					<article>
						<h4>24 / 7 Support</h4>
						<p>Dedicated support</p>
					</article>
				</div>
			</section>
		</div>
	);
}
