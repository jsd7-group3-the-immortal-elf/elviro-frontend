import { useEffect } from "react";
import Banner from "../../components/Banner";

function ContactPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Banner h1="Contact" h3="Contact" />

			<div className="flex w-2/3 gap-10 mx-auto py-10">
				<section className="flex flex-col w-1/3 gap-8">
					<picture className="w-2/3">
						<img
							className="rounded-full"
							src="images/contact.png"
							alt="Banner"
						/>
					</picture>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col">
							<i className="fa-solid fa-location-dot"></i>
							<div className="flex flex-col gap-2">
								<h3>Address</h3>
								<p>Bangkae, Bangkok, Thailand</p>
							</div>
						</div>
						<div className="flex flex-col">
							<i className="fa-solid fa-phone"></i>
							<div className="flex flex-col gap-2">
								<h3>Phone</h3>
								<p>Mobile: +(66) xx-xxx-xxxx</p>
								<p>Hotline: +(84) 456-6789</p>
							</div>
						</div>
						<div className="flex flex-col">
							<i className="fa-regular fa-clock"></i>
							<div className="flex flex-col gap-2">
								<h3>Business Hours</h3>
								<p>Monday-Friday: 9:00 - 22:00</p>
								<p>Saturday-Sunday: 9:00 - 21:00</p>
							</div>
						</div>
					</div>
				</section>

				<section className="flex flex-col w-2/3 gap-20 mt-12">
					<div className="flex flex-col gap-6 text-center">
						<h2>Get In Touch With Us</h2>
						<p>
							For more information about our products & services, please feel
							free to drop us a message. Our staff will always be there to
							assist you. No need to hesitate!
						</p>
					</div>

					<form className="flex flex-col gap-6">
						<label className="flex flex-col gap-2">
							Your Name
							<input
								className="input"
								type="text"
								id="name"
								name="firstname"
								placeholder="Your Name"
							/>
						</label>

						<label className="flex flex-col gap-2">
							Email Address
							<input
								className="input"
								type="email"
								id="email"
								name="email"
								placeholder="abc@def.com"
							/>
						</label>

						<label className="flex flex-col gap-2">
							Subject
							<input
								className="input"
								type="text"
								id="subject"
								name="subject"
								placeholder="This is optional"
							/>
						</label>

						<label className="flex flex-col gap-2">
							Message
							<textarea
								className="input"
								id="message"
								rows="4"
								placeholder="Hi, I'd like to ask about"
							></textarea>
						</label>

						<button className="btn w-1/3 bg-green hover:bg-darkgreen hover:text-white">
							Submit
						</button>
					</form>
				</section>
			</div>
		</main>
	);
}
export default ContactPage;
