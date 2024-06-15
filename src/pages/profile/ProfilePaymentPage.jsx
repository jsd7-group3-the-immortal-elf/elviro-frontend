function ProfilePaymentPage() {
	return (
		<div>
			<section className="py-10 xl:py-10 xl:px-16">
				<form action="" className="flex flex-col gap-6">
					{/*-- personal info --*/}
					<h2 className="text-left">Payment</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<h3 className="text-left">Card Detail</h3>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Card number
							<input
								type="number"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							Name on card
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>
					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Expiry Date
							<input
								type="date"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
						<label className="flex flex-col w-full">
							CVV
							<input
								type="number"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>

					<div className="flex flex-col sm:w-1/2 sm:pr-4">card logo</div>

					{/*!-- address -->*/}
					<h2 className="text-left mt-8">Bank Account</h2>

					<hr className="my-2 border-[#B5C18E]" />

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-full">
							Bank
							<select className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg">
								<option value="banka">Bank A</option>
								<option value="bankb">Bank B</option>
								<option value="bankc">Bank C</option>
							</select>
						</label>
						<label className="flex flex-col w-full">
							Account Holder Name
							<input
								type="text"
								className="border border-neutral-300 px-4 py-3 mt-3 rounded-lg"
								required
							/>
						</label>
					</div>

					<div className="flex flex-col sm:flex-row gap-6">
						<label className="flex flex-col w-1/2">
							Account Number
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
export default ProfilePaymentPage;
