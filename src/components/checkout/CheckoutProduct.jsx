// import mockup_sofa from "/images/mockup_sofa.png";

export default function CheckoutProduct({ inputArrayProduct }) {
	// ไม่มีเวลาหาวิธี เอา object ของ Array จากหน้า page มาใส่ในหน้านี้ได้
	// const priceList = [
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "PÄRUP sofa",
	// 		productQuality: "3",
	// 		productPrice: "8999",
	// 	},
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "VIMLE sofa",
	// 		productQuality: "1",
	// 		productPrice: "15999",
	// 	},
	// 	{
	// 		productPicture: mockup_sofa,
	// 		productName: "GLOSTAD sofa",
	// 		productQuality: "2",
	// 		productPrice: "2999",
	// 	},
	// ];
	return (
		<div className="w-auto px-4">
			<div className="grid grid-col-1 gap-2  justify-center">
				{inputArrayProduct.map((product, index) => (
					<div key={index} className="flex ">
						<picture className="flex w-auto h-auto border-2 py">
							<img
								className="px-1"
								src={product.productPicture}
								alt={product.productName}
							/>
						</picture>
						<div className="flex flex-col justify-center  px-8 bg-[#F4F4F4]">
							<h3 className="text-base">{product.productName}</h3>
							<ul className="mt-3 text-base flex gap-4">
								<li>{product.productQuality}</li>
								<li>x</li>
								<li>{parseFloat(product.productPrice).toLocaleString()} ฿</li>
							</ul>
							<div className="flex py-2 justify-between items-center">
								<p className="px-4"></p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* --------------------  รูป  -------------------- */}
			{/* <img
				alt="image_product"
				src={mockup_sofa}
				className="max-w-52 bg-origin-border rounded-2xl"
			/> */}
			{/* --------------------  หัวข้อ  -------------------- */}
			<div className="flex flex-col justify-between w-auto mb-4">
				{/* <div className="flex justify-between w-full">
					<h3>Product</h3>
					<h3>Subtotal</h3>
				</div> */}
				{/* --------------------  ลิสรายการ  -------------------- */}
				<ul className="w-auto gap-4 flex flex-col mb-7">
					<li className="flex justify-between">
						<span>7% Tax</span>
						<span>70 ฿</span>
					</li>
					<li className="flex justify-between">
						<span>Subtotal</span>
						<span>1069 ฿</span>
					</li>
					<li className="flex justify-between">
						<span>Total</span>
						<span className=" text-xl text-[#B88E2F] font-bold ">1069 ฿</span>
					</li>
				</ul>
			</div>
			<hr className=" border-neutral-800" />
		</div>
	);
}
