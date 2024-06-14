function ProfileNav() {
	return (
		<>
			<div className="flex flex-col items-center gap-10">
				<h1>My Account</h1>
				<picture className="w-1/2 h-1/2 lg:h-auto xl:w-2/3">
					<img
						src="/public/10395680_m1(1).jpg"
						alt="Profile Image"
						className="rounded-full"
					/>
				</picture>
			</div>
		</>
	);
}
export default ProfileNav;
