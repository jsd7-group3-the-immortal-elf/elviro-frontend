// import { Link, useLocation } from "react-router-dom";

function Banner() {
	// const location = useLocation();
	// const itemPage = location.pathname.split("/").filter((x) => x);
	// let storePage = "";
	// console.log(location);
	// console.log(itemPage);
	// console.log(storePage);
	return (
		<div className=" breadcrumbs bg-cover bg-center bg-[url('/public/images/banner-image.png')] flex flex-col justify-center items-center w-full h-[300px]">
			<h1 className=" my-8 ">All Room</h1>
			<h3>
				{/* {<Link to="/">Home</Link>} */}
				<span> Home </span>
				{/* -------------Code breadcrumbs----------- */}
				{/* {itemPage.map((name, index) => {
				storePage += `/ ${name}`;
				const isLast = index === itemPage.length - 1;
				return isLast ? (
					<span key={storePage}> / {name}</span>
				) : (
					<span key={storePage}>
						{" "}
						<Link to={storePage}>{name}</Link>
					</span>
				);
			})} 
			 */}
			</h3>
		</div>
	);
}

export default Banner;
