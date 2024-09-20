/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-navy': 'rgba(11, 26, 51, 1)', // Full opacity (1)
        'custom-light': '#EAEAEA',            // Additional light color
        'custom-dark': '#333333',             // Additional dark color
      },               

      keyframes: {
        avatar: {
          '0%, 100%': { transform: 'scale(1)' },  // Normal size at start and end
          '50%': { transform: 'scale(0.8)' },     // Shrinks at midpoint
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        doorOpenClose: {
          '0%': { transform: 'rotateY(0deg)', opacity: 1 }, // Closed state
          '0%': { transform: 'rotateY(90deg)', opacity: 0 }, // Open state
          '50%': { transform: 'rotateY(0deg)', opacity: 1 }, // Closed state
        },

      },
      animation: {
        avatar: 'avatar 2s ease-in-out infinite',  // Animation for avatar
        slideInLeft: 'slideInLeft 1s ease-out',    // New slide-in animation
        doorOpenClose: 'doorOpenClose 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
