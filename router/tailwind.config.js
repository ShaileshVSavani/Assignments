// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have an index.html file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your file extensions
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
