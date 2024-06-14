import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CreateAccountPage from "./components/login/CreateAccountPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CreateAccountPage />
	</React.StrictMode>
);
