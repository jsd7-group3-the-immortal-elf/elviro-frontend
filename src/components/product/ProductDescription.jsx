import {FaStar, FaHeart} from "react-icons/fa6";

function ProductDescription() {
	return (
		<>
			<main className="mx-[94px]">
				{/*---------- product section ------------*/}
				<section id="product" className="mt-[66px]">
					<div className="flex mb-[96px] gap-[96px] flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
						{/*---------- image side ------------*/}
						<div id="productImage">
							<div className="px-8 md:px-0 w-screen md:w-[576px] class=md:flex">
								<picture
									id="bigImage"
									className="h-[576px] mb-[32px] shadow-xl object-cover"
								>
									<img
										src="./images/sofa_image.png"
										alt="big image"
										className="rounded-2xl"
									/>
								</picture>
								<div id="imageRow" className="flex justify-between">
									<picture className="bg-gray-200 w-[116px] h-[116px] object-cover">
										<img src="./images/sofa_image.png" alt="image 01" />
									</picture>
									<picture className="bg-gray-200 w-[116px] h-[116px] object-cover">
										<img src="./images/sofa_02.jpg" alt="image 02" />
									</picture>
									<picture className="bg-gray-200 w-[116px] h-[116px] object-cover">
										<img src="./images/sofa_03.jpg" alt="image 03" />
									</picture>
									<picture className="bg-gray-200 w-[116px] h-[116px] object-cover">
										<img src="./images/sofa_04.jpg" alt="image 04" />
									</picture>
								</div>
							</div>
						</div>
						{/*---------- detail side ------------*/}
						<div id="productDetail" className="md:w-6/12 md:max-w-6/12">
							<div className="flex justify-between">
								<h2 className="mb-6">PARUP sofa</h2>
								<i className="fa-regular fa-heart fa-2xl" />
							</div>
							<div className="mb-[61px]">
								<div id="price" className="font-light mb-[24px]">
									<h3 className="text-3xl mb-[24px]">
										Price
										<span className="ml-[100px] font-medium">999 Baht</span>
									</h3>
									<div className="flex gap-[32px]">
										<div id="star">
											<FaStar className="bg-{#ffd43b}" />
											<<i
												className="fa-solid fa-star"
												style={{ color: "#ffd43b" }}
											/>>
											<<i
												className="fa-solid fa-star"
												style={{ color: "#ffd43b" }}
											/>>
											<<i
												className="fa-solid fa-star"
												style={{ color: "#ffd43b" }}
											/>>
											<<i
												className="fa-solid fa-star"
												style={{ color: "#ffd43b" }}
											/>>
											<i
												className="fa-solid fa-star-half"
												style={{ color: "#ffd43b" }}
											/>
										</div>
										<p>|</p>
										<div>
											<p>10 Customer Review</p>
										</div>
									</div>
								</div>
								<div id="description">
									<h3 className="text-3xl mb-[24px]">Description</h3>
									<p className="mb-[24px] md:text-xl">
										Introducing our PARUP Sofa, blending style and relaxation
										with plush cushions and durable upholstery for exceptional
										comfort. Its sleek, modern design in a versatile grey hue
										complements any decor, ideal for enhancing your living
										space. Whether lounging, entertaining, or unwinding, our
										sofa promises a cozy and inviting experience.
									</p>
								</div>
								<div id="size">
									<h3 className="text-3xl mb-[24px]">Size</h3>
									<div className="flex gap-5 mb-[24px]">
										<div className="bg-yellow-500 rounded-lg w-[45px] h-[45px] flex items-center justify-center">
											<p className="text-white">M</p>
										</div>
										<div className="bg-yellow-700 rounded-lg w-[45px] h-[45px] flex items-center justify-center">
											<p className="text-white">L</p>
										</div>
										<div className="bg-yellow-900 rounded-lg w-[45px] h-[45px] flex items-center justify-center">
											<p className="text-white">XL</p>
										</div>
									</div>
								</div>
								<div id="color" className="mb-[24px]">
									<h3 className="text-3xl mb-[24px]">Color</h3>
									<div className="flex gap-5">
										<div className="bg-stone-500 rounded-full w-[45px] h-[45px]" />
										<div className="bg-amber-950 rounded-full w-[45px] h-[45px]" />
										<div className="bg-gray-300 rounded-full w-[45px] h-[45px]" />
									</div>
								</div>
								<div id="addCart" className="align-bottom">
									<input
										type="number"
										min={0}
										className="mr-2 p-2 py-3 text-center border border-gray-400 rounded-lg w-1/4"
										placeholder={1}
									/>
									<button
										id="bt-addCart"
										type="submit"
										className="text-sm mr-2 px-10 py-3 text-center border border-gray-600 w-1/3 rounded-lg hover:shadow-lg md:text-xl"
									>
										Add to Cart
									</button>
									<button
										id="bt-addCart"
										type="submit"
										className="text-sm mr-2 px-10 py-3 text-center border border-gray-600 w-1/3 rounded-lg hover:shadow-lg md:text-xl"
									>
										+ Compare
									</button>
								</div>
							</div>
							<hr className="border border-gray-400 mb-[48px]" />
							<div id="other" className="flex gap-20">
								<div id="key" className="md:text-xl">
									<h4 className="mb-2">SKU</h4>
									<h4 className="mb-2">Tags</h4>
									<h4 className="mb-2">Share</h4>
								</div>
								<div id="value" className="md:text-xl">
									<h4 className="mb-2">: SS001</h4>
									<h4 className="mb-2">: Sofa, Chair, Home, Shop</h4>
									<h4 className="mb-2">
										: <i className="fa-brands fa-facebook fa-xl" />
									</h4>
								</div>
							</div>
						</div>
					</div>
					<hr className="border border-gray-200" />
				</section>
				{/*---------- Description Detail ------------*/}
				{/*---------- Review Detail ------------*/}
				<section id="review" className="my-[64px]">
					<div className="flex flex-row justify-center mb-[62px] gap-5 items-end align-bottom">
						<h2>Review</h2>
						<h3>[10]</h3>
					</div>
					<div className="flex flex-col justify-center">
						<div id="reviewer-01">
							<h3>Paul</h3>
							<p>Exceeds my expectation.</p>
							<div>
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
							</div>
							<p className="mb-[64px] text-xl">
								"This sofa exceeded my expectations! The plush cushions are so
								cozy, and the sleek design fits perfectly in my living room.
								It's become the go-to spot for relaxing after a long day -
								<b>highly recommend!</b>"
							</p>
						</div>
						<div id="reviewer-02">
							<h3>April</h3>
							<p>Great value for the gamily.</p>
							<div>
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
							</div>
							<p className="mb-[64px] text-xl">
								"This sofa is very comfotable and easy to clean. No matter how
								many times my son splash his colors on, it will always look as
								good as new once I wipe it out."
							</p>
						</div>
						<div id="reviewer-03">
							<h3>Anonymous</h3>
							<p>Just right.</p>
							<div>
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
							</div>
							<p className="mb-[64px] text-xl">
								"Great value. Price not too expensive for our starting family."
							</p>
						</div>
						<div id="reviewer-04">
							<h3>Eric</h3>
							<p>-</p>
							<div>
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
								<i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
							</div>
							<p className="mb-[64px] text-xl">"I like it."</p>
						</div>
					</div>
					<hr className="border border-gray-200" />
				</section>
			</main>
		</>
	);
}

export default ProductDescription;
