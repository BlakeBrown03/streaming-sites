/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true
		},
		extend: {}
	},
	plugins: [require("tailwind-scrollbar-hide")],
	darkMode: "media"
};
