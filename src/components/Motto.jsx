// import React from "react";
import { FaTrophy, FaRegHandshake, FaTruck, FaHeadset } from "react-icons/fa";

export default function Motto() {
	return (
		<div>
			<section className="max-md:hidden flex justify-center items-center bg-[#B5C18E]/60 h-fit gap-10 px-16 py-6">
				<div className="flex align-center">
					<i className="text-4xl my-auto mr-4">
						<FaTrophy />
					</i>
					<article>
						<p className="text-xl font-semibold">High Quality</p>
						<p>crafted from top materials</p>
					</article>
				</div>
				<div className="flex align-center">
					<i className="text-4xl my-auto mr-4">
						<FaRegHandshake />
					</i>
					<article>
						<p className="text-xl font-semibold">Warranty Protection</p>
						<p>Over 2 years</p>
					</article>
				</div>
				<div className="flex align-center">
					<i className="text-4xl my-auto mr-4">
						<FaTruck />
					</i>
					<article>
						<p className="text-xl font-semibold">Free Shipping</p>
						<p>Order over 1000 Baht</p>
					</article>
				</div>
				<div className="flex align-center">
					<i className="text-4xl my-auto mr-4">
						<FaHeadset />
					</i>
					<article>
						<p className="text-xl font-semibold">24 / 7 Support</p>
						<p>Dedicated support</p>
					</article>
				</div>
			</section>
		</div>
	);
}
