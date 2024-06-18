function ContactPage() {
	return (
		<>
			<section>
				<div className="flex items-center justify-center">
					<div className="md:w-1/3">
						<picture className="flex justify-center py-8">
							<img
								className="h-40 w-40 rounded-full"
								src="public/contact.png"
								alt="Banner"
							/>
						</picture>
					</div>
					<div className="md:w-2/3">
						<h2>Get In Touch With Us</h2>
						<p>
							For More Information About Our Product & Services. Please Feel
							Free To Drop Us An Email. Our Staff Always Be There To Help You
							Out. Do Not Hesitate!
						</p>
					</div>
				</div>
				<section className="w-full md:flex px-10 py-10 gap-3">
					<div className="flex flex-col md:w-1/3">
						<div>
							<div className="flex items-center gap-2">
								<i className="fa-solid fa-location-dot"></i>
								<h3>address</h3>
							</div>
							<p className="pl-6 pb-10">Bangkae, Bangkok, Thailand</p>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<i className="fa-solid fa-phone"></i>
								<h3>Phone</h3>
							</div>
							<p className="pl-6">Mobile: +(66) xx-xxx-xxxx</p>
							<p className="pl-6 pb-10">Hotline: +(84) 456-6789</p>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<i className="fa-regular fa-clock"></i>
								<h3>Working Time</h3>
							</div>
							<p className="pl-6">Monday-Friday: 9:00 - 22:00</p>
							<p className="pl-6 pb-10">Saturday-Sunday: 9:00 - 21:00</p>
						</div>
					</div>
					<div className="md:w-2/3 pb-4">
						<form className="flex flex-col gap-4">
							<div className="flex flex-col">
								<label>Your Name</label>
								<input
									className="px-1 py-2 border-2 border-slate-200 rounded"
									type="text"
									id="name"
									name="firstname"
									placeholder="Your Name"
								/>
							</div>
							<div className="flex flex-col">
								<label>Email Address</label>
								<input
									className="px-1 py-2 border-2 border-slate-200 rounded"
									type="email"
									id="email"
									name="email"
									placeholder="abc@def.com"
								/>
							</div>
							<div className="flex flex-col">
								<label>Subject</label>
								<input
									className="px-1 py-2 border-2 border-slate-200 rounded"
									type="text"
									id="subject"
									name="subject"
									placeholder="This is optional"
								/>
							</div>
							<div className="flex flex-col">
								<label>Message</label>
								<textarea
									className="px-1 py-2 border-2 border-slate-200 rounded dark:placeholder-gray-400"
									id="message"
									rows="4"
									placeholder="Hi, I'd like to ask about"
								></textarea>
							</div>
							<button className="bg-orange-600 py-1 w-40 rounded text-white">
								Submit
							</button>
						</form>
					</div>
				</section>
			</section>
		</>
	);
}
export default ContactPage;
