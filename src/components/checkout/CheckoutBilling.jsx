// import {  Outlet } from "react-router-dom";
export default function CheckoutBilling({ fistName, lastName, phone, email }) {
	return (
		<div
			id="user_profile"
			className="flex flex-col items-center w-full max-w-[600px] "
		>
			{/* --------------------  ข้อมูลทั่วไป  -------------------- */}
			<article id="personal " className=" w-full flex flex-col items-center">
				<h2 className="mb-4">Billing details</h2>
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
				<div className="flex flex-col items-center gap-4 w-full">
					<label className=" size-full" id="first_name">
						{/* --------------------  ชื่อ  -------------------- */}
						<h4>First Name</h4>
						<input
							type="text"
							value={fistName}
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="last_name">
						{/* --------------------  นามสกุล  -------------------- */}
						<h4>Last Name</h4>
						<input
							type="text"
							value={lastName}
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="phone">
						{/* --------------------  เบอร์โทร  -------------------- */}
						<h4>Phone</h4>
						<input
							type="tel"
							value={phone}
							className="phone border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="email">
						{/* --------------------  Email  -------------------- */}
						<h4>Email Address</h4>
						<input
							type="email"
							value={email}
							className="phone border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
				</div>
				<br />
			</article>
			{/* --------------------  ข้อมูลที่อยู่  -------------------- */}
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
					<label className=" size-full" id="country">
						{/* --------------------  ประเทศ  -------------------- */}
						<h4>Country / Region</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="street_address">
						{/* --------------------  บ้านเลขที่  -------------------- */}
						<h4>Street address</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="city">
						{/* --------------------  เมือง  -------------------- */}
						<h4>Town / City</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="province">
						{/* --------------------  จังหวะ  -------------------- */}
						<h4>Province</h4>
						<input
							type="text"
							className="border border-neutral-400 rounded-xl px-4 py-2 mt-1 w-full"
						/>
					</label>
					<label className=" size-full" id="zip_code">
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
