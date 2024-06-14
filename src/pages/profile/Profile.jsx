import ProfileNav from "./ProfileNav";
import ProfilePage from "./ProfilePage";

function Profile() {
	return (
		<div className="flex items-start justify-center gap-10 bg-[#B5C18E] py-10">
			<div className="lg:w-2/5">
				<ProfileNav />
			</div>
			<div className="bg-white rounded-3xl lg:w-3/5 xl:w-3/4 p-8">
				<ProfilePage />
			</div>
		</div>
	);
}
export default Profile;
