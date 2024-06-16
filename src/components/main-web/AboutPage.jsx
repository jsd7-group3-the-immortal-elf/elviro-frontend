// import NavBar from "../NavBar";
// import Banner from "../Banner";
import Image from "../../../public/images/elviro_logo.svg";

function AboutPage() {
	return (
		<>
			<main>
				{/* <Banner /> */}

				<section id="content" className=" mr-[56px] my-[66px]">
					<div className="flex justify-center gap-5 mb-8">
						<div className="min-w-[140px] w-[140px] md:w-[160px] ">
							<img src={Image} alt="Elviro Logo" />
						</div>
						<div id="brandCaption" className="flex-col content-center content">
							<h2 className="text-[50px] md:text-[80px] mb-3 text-left">
								Elviro
							</h2>
							<p className="text-xl md:text-2xl italic font-normal">
								"We care about your family"
							</p>
						</div>
					</div>
					<div id="textContent" className="text-lg">
						<p className="mb-5">
							Furniture is more than just furniture. We understand how
							meaningful it can be to your growing family. <b>Elviro</b> is
							derived from an <i>elf</i>, a magical in a fantasy fairytale and{" "}
							<i>environment</i>. We are here to make your experience of
							shopping magical.
						</p>
						<p className="mb-5">
							Not only is our furniture environmentally friendly, and safe for
							everyone. But we aim to make it suited for all the stages of your
							family. That’s the motto of Ms. Elvira Yuri, CEO and founder of
							Elviro.
						</p>
						<p className="mb-5">
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
