import axiosInstance from "../../utils/axiosInstance";

export default function ProfileHistoryPage() {
	// async function getOrderById(userId) {
	//     try {
	//         const response
	//     } catch(error) {
	//         console.log("Failed to get D")
	//     }
	// }
	return (
		<section className="bg-white rounded-3xl w-full lg:w-3/5 xl:w-3/4 p-8 xl:py-10 xl:px-16">
			<section action="" className="flex flex-col items-center gap-6">
				<h2 className="text-left">Purchase History</h2>
				<hr className="my-2 w-full border-[#B5C18E]" />

				<section className="flex gap-20">
					<picture></picture>
					<p>Name</p>
					<p>Status</p>
				</section>
			</section>
		</section>
	);
}
