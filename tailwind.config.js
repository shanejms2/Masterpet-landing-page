module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gliker', 'sans-serif'],
        body: ['Fractul', 'sans-serif'],
        fractul: ['Fractul', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#06018D',
          green: '#A2ED4A',
        },
        // Semantic color for the main background, uses CSS variable for easy theming
        background: 'var(--background)',
        // Semantic color for special sections, uses CSS variable for easy theming
        'section-background': 'var(--section-background)',
      },
    },
  },
  plugins: [],
}; 