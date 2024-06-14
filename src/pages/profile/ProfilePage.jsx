function ProfilePage() {
	return (
		<div>
			<section className="py-10 xl:py-10 xl:px-16">
				<form action="" className="flex flex-col gap-6">
					{/*-- personal info --*/}
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
							/>
						</label>
					</div>

					{/*!-- address -->*/}
					<h2 className="text-left mt-8">Address</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Street Address 1
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							Street Address 2
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
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							District
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Sub District
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							Postal Code
							<input
								type="number"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
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
		</div>
	);
}
export default ProfilePage;
