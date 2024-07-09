/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightgreen: "#c7d1a6",
				green: "#b5c18e",
				darkgreen: "#939d73",
				brown: "#B99470",
			},
		},
	},
	plugins: [],
};
