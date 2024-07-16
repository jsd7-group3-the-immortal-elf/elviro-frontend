import { Link } from "react-router-dom";

function BannerHome() {
	return (
		<section className="relative">
			<picture>
				<img
					src="images/mockup-living.jpg"
					alt="Banner"
					className="h-[500px]"
				/>
			</picture>
			<article className="absolute top-0 flex flex-col justify-center gap-4 p-8 bg-black/50 w-full md:bg-[#B5C18E] md:top-auto md:bottom-10 md:right-10 md:w-2/5 md:min-h-1/2 md:rounded-3xl">
				<h1 className="text-green md:text-neutral-700">
					Discover Our New Collection
				</h1>
				<p className="hidden md:flex text-xl">
					Let&apos;s explore our brand new furniture collections for your whole
					family.
				</p>
				<Link
					to="/shop"
					className="hidden md:flex justify-center btn bg-orange-100 p-3 w-1/2 text-xl font-semibold hover:bg-orange-200"
				>
					Buy Now
				</Link>
			</article>
		</section>
	);
}
export default BannerHome;
