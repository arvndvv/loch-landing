/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "heading-subtle": "#B0B1B3",
        "dark": "#19191A",
        "dark-light": "#F2F2F2",
        "text-gray": "#96979A"
      },
      dropShadow: {
        "text": "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      borderColor: {
        "input": "#E5E5E6",
      },
      boxShadow: {
        "input": "0px 4px 10px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.04)",
        "generic": "0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)"
      },
      backgroundImage: {
        "bell": "url('/src/assets/Bell.png')",
        "eye": "url('/src/assets/Eye.png')",
        'landingBg': "url('/src/assets/bluela.svg')",
        'card1': "url('/src/assets/notify/Card1.png')",
        'card2': "url('/src/assets/notify/Card2.png')",
        'card3': "url('/src/assets/notify/Card3.png')",
      },
    },

  }

}