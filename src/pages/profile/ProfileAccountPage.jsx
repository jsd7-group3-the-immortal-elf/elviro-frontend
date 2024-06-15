function ProfileAccountPage() {
	return (
		<div className="px-8">
			<section className="py-10 xl:py-10 xl:px-16">
				<form action="" className="flex flex-col gap-6">
					{/*-- personal info --*/}
					<h2 className="text-left">Account</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							User Name
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							Email
							<input
								type="email"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>
					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Password
							<input
								type="password"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							Change password
							<input
								type="password"
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
export default ProfileAccountPage;
