/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-1": '#ce6a6b',
        "c-2": '#4a919e',
        "c-3": '#212e53',
        "c-4": '#985277',
      },
      backgroundImage: {
        'img': "url('https://media.istockphoto.com/id/1098075682/pl/zdj%C4%99cie/stylowe-i-minimalistyczne-skandynawskie-wn%C4%99trze-z-wystrojem-sofy-tropicla-ro%C5%9Blin-stojak.jpg?s=612x612&w=0&k=20&c=urHLgiPwZYsGEAAp2fLgj6owqqgidLIr8rGqT_hRMkU=')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#985277",
          "secondary": "#4a919e",
          "accent": "#212e53",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "autumn",
      "winter",
      "dracula"
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}