export default function CheckoutBilling() {
	return (
		<div>
			<section id="user_profile" className="lg:w-1/2">
				<div id="personal">
					{/* --------------------  ส่วนid  -------------------- */}
					<div
						id="head_personal"
						className="flex flex-col items-start mb-[1.5rem]"
					>
						<h2 className="my-[1rem]">Billing details</h2>
						<h3 className="text-darkgreen ">Personal information</h3>
						{/* --------------------  CheckBox  -------------------- */}
						{/* <div className="information flex">
							<input
								type="checkbox"
								id="information"
								className="text-gray-950"
							/>
							<p className="">Same info. as your account</p>
						</div> */}
					</div>
					<article id="details_profile" className="flex flex-col gap-4">
						<label id="first_name">
							<h4>First Name</h4>
							<input
								type="text"
								id="first_input"
								className="border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label className="last_name">
							<h4>Last Name</h4>
							<input
								type="text"
								id="last_input"
								className="border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label id="phone">
							<h4>Phone</h4>
							<input
								type="tel"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label id="email">
							<h4>Email Address</h4>
							<input
								type="email"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
					</article>
					<br />
				</div>

				{/* -------------------------ส่วนAddress------------------------- */}
				<article id="user_contact">
					<div
						id="head_contact"
						className="flex flex-col items-start mb-[1.5rem]"
					>
						<h3 className="text-darkgreen">Address</h3>
						{/* --------------------  CheckBox  -------------------- */}
						{/* <div id="information" className="flex">
							<input type="checkbox" id="information" />
							<p className="">Same address as your account</p>
						</div> */}
					</div>
					<div id="details_contact" className="flex flex-col gap-4]">
						<label id="country">
							<h4>Country / Region</h4>
							<input
								type="text"
								className="phone border border-[#111110] rounded-xl px-4 py-1 border-sky-500 border-2"
							/>
						</label>
						<label id="street_address">
							<h4>Street address</h4>
							<input
								type="text"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label id="city">
							<h4>Town / City</h4>
							<input
								type="text"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label id="province">
							<h4>Province</h4>
							<input
								type="text"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
						<label id="zip_code">
							<h4>ZIP code</h4>
							<input
								type="text"
								className="phone border border-[#111110] rounded-xl px-4 py-1"
							/>
						</label>
					</div>
					<br />
				</article>
			</section>
		</div>
	);
}
