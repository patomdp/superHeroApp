/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}', // Esto hará que Tailwind observe todos tus archivos HTML y TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
};

