import Banner from "../../components/Banner";
import { FaGithub } from "react-icons/fa";

function AboutPage() {
	return (
		<>
			<main>
				<Banner h1="About Us" h3="About Us" />

				<section id="content" className="flex flex-col my-16 px-6 items-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-8">
						<div className="min-w-[140px] w-[140px] md:w-[160px] ">
							<img src="/images/elviro_logo.svg" alt="Elviro Logo" />
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
						className="text-sm md:text-2xl md:mx-w-48 lg:w-2/3 flex flex-col gap-5"
					>
						<p>
							Elviro is an e-commerce web application designed with new parents
							in mind. The website has been developed from scratch, encompassing
							the entire process from brainstorming the concept, creating UX/UI
							designs, to developing both the frontend and backend components.
						</p>
						<p>
							Our main goal is not just to develop a functioning web app, but to
							create a pleasant experience for both clients shopping for new
							furniture for their families and administrators in charge of
							monitoring the web app.
						</p>
						<p>
							Elviro was created by the Immortal Elf. We are grateful for the
							instructors at Generation Thailand, mentors and friends who have
							assisted us along this wonderful journey.
						</p>
						<p>The following is a list of creators.</p>
					</div>
					<picture className="flex flex-col md:flex-row items-center justify-center gap-10 w-full my-5 mx-auto">
						<section></section>
						<section className="flex flex-col items-center">
							<img
								src="/images/members/Vicky.png"
								alt="Vicky"
								className="w-48 md:w-72 rounded-full mb-2"
							/>
							<h1 className="text-base md:text-lg text-center">
								Supakarn <br className="block md:hidden" />
								TANGSIRIVATTHANAVONG
							</h1>
							<div className="flex gap-5 text-brown font-semibold text-base md:text-xl">
								<a href="https://github.com/supakarn-t" target="_blank">
									Github
								</a>
								<a
									href="https://supakarn-t-portfolio.vercel.app/"
									target="_blank"
								>
									Website
								</a>
							</div>
						</section>
						<section className="flex flex-col items-center">
							<img
								src="/images/members/Kan.png"
								alt="Kan"
								className="w-48 md:w-72 rounded-full mb-2"
							/>
							<h1 className="text-base md:text-lg text-center">
								Kan <br className="block md:hidden" />
								JITTAPRAMOULBOON
							</h1>
							<div className="flex gap-5 text-brown font-semibold text-base md:text-xl">
								<a href="https://github.com/jittakan2539" target="_blank">
									Github
								</a>
								<a
									href="https://kanjitta-portfolio.vercel.app/"
									target="_blank"
								>
									Website
								</a>
							</div>
						</section>

						<section className="flex flex-col items-center">
							<img
								src="/images/members/Charlee.png"
								alt="Charlee"
								className="w-48 md:w-72 rounded-full mb-2"
							/>
							<h1 className="text-base md:text-lg text-center">
								Pongsakon <br className="block md:hidden" />
								MEICHOM
							</h1>
							<div className="flex gap-5 text-brown font-semibold text-base md:text-xl ">
								<a href="https://github.com/Charlee2543" target="_blank">
									Github
								</a>
								<a
									href="https://charlee2543.github.io/My-Portfolio-Website/"
									target="_blank"
								>
									Website
								</a>
							</div>
						</section>
						<section className="flex flex-col items-center">
							<img
								src="/images/members/Kreang.png"
								alt="Kreang"
								className="w-48 md:w-80 rounded-full mb-2"
							/>
							<h1 className="text-base md:text-lg text-center">
								Phatthawut <br className="block md:hidden" />
								CHAIYAPIN
							</h1>
							<div className="flex gap-5 text-brown font-semibold text-base md:text-xl">
								<a href="https://github.com/Phatthawut" target="_blank">
									Github
								</a>
								<a href="https://hitthepoint.co/" target="_blank">
									Website
								</a>
							</div>
						</section>
					</picture>
				</section>
			</main>
		</>
	);
}

export default AboutPage;
