// import NavBar from "../../../src/components/NavBar.jsx";

function ProfilePage() {
	return (
		<>
			<div>
				<main className="flex flex-col items-center gap-10 bg-[#B5C18E] py-10">
					{/* <h1 className="w-11/12 xl:w-4/5 justify-start">My Account</h1> */}
					<section className="flex flex-col lg:flex-row gap-8 w-11/12 xl:w-4/5">
						{/*-------- profile nav --------*/}
						{/* <section className="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-8 lg:w-2/5 xl:w-1/4">
							<picture className="w-1/2 h-1/2 lg:h-auto xl:w-2/3">
								<img
									src="images/10395680_m1 (1).jpg"
									alt="Profile Image"
									className="rounded-full"
								/>
							</picture>
							<nav className="hidden sm:flex bg-white p-4 rounded-3xl w-full">
								<ul className="flex flex-col gap-2">
									<li className="rounded-full">
										<a
											href="profile.html"
											className="block h-full px-4 py-2 rounded-full hover:bg-orange-200"
										>
											Profile
										</a>
									</li>
									<li className="rounded-full">
										<a
											href="profile_account.html"
											className="block h-full px-4 py-2 rounded-full hover:bg-orange-200"
										>
											Account
										</a>
									</li>
									<li className="rounded-full">
										<a
											href="profile_payment.html"
											className="block h-full px-4 py-2 rounded-full hover:bg-orange-200"
										>
											Payment
										</a>
									</li>
									<li className="rounded-full">
										<a
											href="profile_history.html"
											className="block h-full px-4 py-2 rounded-full hover:bg-orange-200"
										>
											Purchase History
										</a>
									</li>
									<li className="rounded-full">
										<a
											href="profile_wishist.html"
											className="block h-full px-4 py-2 rounded-full hover:bg-orange-200"
										>
											Wishlists
										</a>
									</li>
								</ul>
							</nav>
						</section> */}
						{/*-------- profile content --------*/}
						<section className="bg-white rounded-3xl w-full lg:w-3/5 xl:w-3/4 p-8 xl:py-10 xl:px-16">
							<form action="" className="flex flex-col gap-6">
								{/* personal info */}
								<h2 className="text-left">Profile</h2>
								<hr className="my-2 border-[#B5C18E]" />
								<div className="flex flex-col sm:flex-row gap-6">
									<label className="flex flex-col w-full">
										First Name
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required
										/>
									</label>
									<label className="flex flex-col w-full">
										Last Name
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required
										/>
									</label>
								</div>
								<label className="flex flex-col sm:w-1/2 sm:pr-4">
									Birthday
									<input
										type="date"
										className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
									/>
								</label>
								<div className="flex flex-col sm:flex-row gap-6">
									<label className="flex flex-col w-full">
										Email
										<input
											type="email"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required
										/>
									</label>
									<label className="flex flex-col w-full">
										Phone
										<input
											type="number"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required
											minLength={9}
											maxLength={10}
										/>
									</label>
								</div>
								{/* address */}
								<h2 className="text-left mt-8">Address</h2>
								<hr className="my-2 border-[#B5C18E]" />
								<div className="flex flex-col sm:flex-row gap-6">
									<label className="flex flex-col w-full">
										Address
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required=""
										/>
									</label>
									<label className="flex flex-col w-full">
										A
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
										/>
									</label>
								</div>
								<div className="flex flex-col sm:flex-row gap-6">
									<label className="flex flex-col w-full">
										Province
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required=""
										/>
									</label>
									<label className="flex flex-col w-full">
										District
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required=""
										/>
									</label>
								</div>
								<div className="flex flex-col sm:flex-row gap-6">
									<label className="flex flex-col w-full">
										Sub District
										<input
											type="text"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required=""
										/>
									</label>
									<label className="flex flex-col w-full">
										Postal Code
										<input
											type="number"
											className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
											required=""
										/>
									</label>
								</div>
								<button
									type="submit"
									className="py-4 px-6 rounded-xl bg-orange-200 hover:bg-orange-300 mx-auto"
								>
									Save Change
								</button>
							</form>
						</section>
					</section>
				</main>
			</div>
		</>
	);
}

export default ProfilePage;
