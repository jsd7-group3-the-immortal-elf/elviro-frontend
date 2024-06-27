import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import LoginPage from "./pages/login/LoginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<LoginPage />
	</React.StrictMode>
);
