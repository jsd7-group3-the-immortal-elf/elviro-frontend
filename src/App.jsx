import { useState } from "react";

//import Cart from "./components/cart/Cart.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ContactPage />
		</>
	);
}

export default App;
