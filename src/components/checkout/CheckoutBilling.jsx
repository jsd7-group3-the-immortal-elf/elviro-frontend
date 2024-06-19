// import {  Outlet } from "react-router-dom";
export default function CheckoutBilling() {
	return (
		<div
			id="user_profile"
			className="flex flex-col items-center w-full max-w-[600px] "
		>
			<article id="personal " className=" w-full flex flex-col items-center">
				<h2 className="my-4">Billing details</h2>
				<h3 className="text-darkgreen mb-6">Personal information</h3>
				{/* --------------------  CheckBox  -------------------- */}
				{/* <div id="head_personal" className=" mb-6 ">
					<div className="information flex">
							<input
								type="checkbox"
								id="information"
								className="text-gray-950"
							/>
							<p className="">Same info. as your account</p>
						</div>
				</div> */}
				{/* --------------------  ส่วนid  -------------------- */}
				<div
					id="details_profile"
					className="flex flex-col items-center gap-4 w-full"
				>
					<label className="px-20 size-full" id="first_name">
						<h4>First Name</h4>
						<input
							type="text"
							id="first_input"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="last_name">
						<h4>Last Name</h4>
						<input
							type="text"
							id="last_input"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="phone">
						<h4>Phone</h4>
						<input
							type="tel"
							className="phone border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="email">
						<h4>Email Address</h4>
						<input
							type="email"
							className="phone border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
				</div>
				<br />
			</article>

			<article id="user_contact" className="flex flex-col items-center w-full">
				<h3 className="text-darkgreen mb-6">Address</h3>
				{/* --------------------  CheckBox  -------------------- */}
				{/* <div
					id="head_contact"
					className="flex flex-col items-start mb-[1.5rem]"
				>
					<div id="information" className="flex">
						<input type="checkbox" id="information" />
						<p className="">Same address as your account</p>
					</div>
				</div> */}
				{/* -------------------------ส่วนAddress------------------------- */}
				<div id="details_contact" className="flex flex-col gap-4 w-full">
					<label className="px-20 size-full" id="country">
						<h4>Country / Region</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="street_address">
						<h4>Street address</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="city">
						<h4>Town / City</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="province">
						<h4>Province</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className="px-20 size-full" id="zip_code">
						<h4>ZIP code</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
				</div>
				<br />
			</article>
		</div>
	);
}
