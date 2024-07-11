import { CgSpinner } from "react-icons/cg";

export default function Loading() {
	return (
		<section className="flex flex-col gap-8 justify-center items-center h-[calc(100vh/2)]">
			<CgSpinner className="text-9xl text-green animate-spin" />
			<p className="text-2xl">Loading...</p>
		</section>
	);
}
