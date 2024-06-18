import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import ProfilePage from "./pages/profile/ProfilePage";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<ProfilePage />
	</React.StrictMode>
);
