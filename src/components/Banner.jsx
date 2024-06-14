import { Link, useLocation } from "react-router-dom";

function Banner() {
	const location = useLocation();
	const itemPage = location.pathname.split("/").filter((x) => x);
	let storePage = "";
	console.log(location);
	// console.log(itemPage);
	// console.log(storePage);
	return (
		<div className="breadcrumbs">
			<Link to="/">Home</Link>
			{itemPage.map((name, index) => {
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
		</div>
	);
}

export default Banner;
