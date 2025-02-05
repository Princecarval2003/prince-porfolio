/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
	  borderWidth: {
	    DEFAULT: '1px',
	    '0': '0',
	    '2': '2px',
	    '3': '3px',
	    '4': '4px',
	    '6': '6px',
	    '8': '8px',
	    '16': '16px',
	  },
	  extend: {
	   colors:{
	    'button-org-color':'#E92577',
	    
	   },
	   fontFamily: {
	    Inter: ["Inter", "sans-serif"],
	    playfair:["Playfair Display","sans-serif"]
	  },
	   screens: {
	    'xs': '380px',
	  },
	  },
	},
	plugins: [],
    }