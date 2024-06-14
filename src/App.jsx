import { useState } from "react";

import Cart from "./components/cart/Cart.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Cart />
		</>
	);
}

export default App;
