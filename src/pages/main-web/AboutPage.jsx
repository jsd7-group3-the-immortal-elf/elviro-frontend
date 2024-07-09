// import NavBar from "../NavBar";
// import Banner from "../Banner";
import Image from "/images/elviro_logo.svg";

function AboutPage() {
	return (
		<>
			<main>
				{/* <Banner /> */}

				<section id="content" className="flex flex-col mt-16 px-6 items-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-8">
						<div className="min-w-[140px] w-[140px] md:w-[160px] ">
							<img src={Image} alt="Elviro Logo" />
						</div>
						<div className="flex flex-col items-center md:items-start">
							<h2 className="text-5xl md:text-8xl mb-3 text-left">Elviro</h2>
							<p className="text-lg md:text-3xl italic font-normal">
								&quot;We care about your family&quot;
							</p>
						</div>
					</div>
					<div
						id="textContent"
						className="text-sm md:text-2xl md:mx-20 lg:w-2/3 flex flex-col gap-5"
					>
						<p>
							Furniture is more than just furniture. We understand how
							meaningful it can be to your growing family. <b>Elviro</b> is
							derived from an <span className="italic">elf</span>, a magical in
							a fantasy fairytale and{" "}
							<span className="italic">environment</span>. We are here to make
							your experience of shopping magical.
						</p>
						<p>
							Not only is our furniture environmentally friendly, and safe for
							everyone. But we aim to make it suited for all the stages of your
							family. That&apos;s the motto of Ms. Elvira Yuri, CEO and founder
							of Elviro.
						</p>
						<p>
							At Elviro, you will find all the furniture for all tastes, which
							will make shopping enjoyable, and using them even more magical.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default AboutPage;
