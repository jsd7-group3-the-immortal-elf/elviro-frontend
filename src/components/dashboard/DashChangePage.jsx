import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function DashChangePage() {
	return (
		<section className="flex justify-between border-t pt-2">
			<div className="flex gap-6">
				<select name="" id="" className="bg-neutral-100 rounded-md px-2">
					<option value="">10</option>
					<option value="">20</option>
				</select>
				<p>Items per page</p>
				<p>1-10 of 200 items</p>
			</div>

			<div className="flex items-center gap-6">
				<select name="" id="" className="bg-neutral-100 rounded-md px-2">
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
				</select>
				of 44 pages
				<FaChevronLeft />
				<FaChevronRight />
			</div>
		</section>
	);
}
