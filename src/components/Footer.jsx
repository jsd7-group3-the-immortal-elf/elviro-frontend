import {Link} from 'react-router-dom'

function Footer() {
	return (
		<div className="py-4">
			<footer className="flex flex-col gap-4 p-4 md:py-8 md:px-20 border-t border-[#B5C18E]">
				<div className="hidden md:flex gap-36">
					<ul className="flex flex-col gap-8">
						<li>
							<h3>Elviro.</h3>
						</li>
						<li className="text-neutral-400">Bangkok, Thailand</li>
					</ul>

					<ul className="flex flex-col gap-4">
						<li className="text-neutral-400 mb-4">Links</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="/">Home</Link>
						</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="shop">Shop</Link>
						</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="about">About</Link>
						</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="contact">Contact</Link>
						</li>
					</ul>

					<ul className="flex flex-col gap-4">
						<li className="text-neutral-400 mb-4">Help</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="/">Payment Options</Link>
						</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="shop">Returns</Link>
						</li>
						<li className="hover:text-[#939d73] hover:underline decoration-[#939d73]">
							<Link to="about">Privacy Policies</Link>
						</li>
					</ul>

					<ul className="lg:flex flex-col gap-4 hidden">
						<li className="text-neutral-400 mb-1">Newsletter</li>
						<li>
							<form className="flex flex-col xl:flex-row items-start gap-4">
								<input
									type="email"
									placeholder="Enter Your Email Address"
									className="border-b border-neutral-700 text-base w-60 text-ellipsis"
								/>
								<button
									type="submit"
									className="hover:text-[#939d73] hover:underline decoration-[#939d73]"
								>
									SUBSCRIBE
								</button>
							</form>
						</li>
					</ul>
				</div>
				<p>&copy; 2024 Elviro. All rights reserved.</p>
			</footer>
		</div>
	);
}
export default Footer;
