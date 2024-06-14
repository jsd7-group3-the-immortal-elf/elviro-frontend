import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import DashBoardNav from "./components/DashBoardNav.jsx";
import App from "./App.jsx";
// --> <DashBoardNav />

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
