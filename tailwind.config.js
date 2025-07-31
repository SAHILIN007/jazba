module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Living Soil Palette - Primary Colors
        primary: {
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800 - Deep forest green
          900: "#1B5E20", // green-900
          DEFAULT: "#2E7D32", // green-800
        },
        // Secondary Colors - Rich earth brown
        secondary: {
          50: "#EFEBE9", // brown-50
          100: "#D7CCC8", // brown-100
          200: "#BCAAA4", // brown-200
          300: "#A1887F", // brown-300
          400: "#8D6E63", // brown-400
          500: "#795548", // brown-500
          600: "#6D4C41", // brown-600
          700: "#5D4037", // brown-700 - Rich earth brown
          800: "#4E342E", // brown-800
          900: "#3E2723", // brown-900
          DEFAULT: "#5D4037", // brown-700
        },
        // Accent Colors - Harvest gold
        accent: {
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFCA28", // amber-400
          500: "#FFC107", // amber-500
          600: "#FF8F00", // amber-600 - Harvest gold
          700: "#FF6F00", // amber-700
          800: "#E65100", // amber-800
          900: "#BF360C", // amber-900
          DEFAULT: "#FF8F00", // amber-600
        },
        // Background Colors
        background: "#FAFAFA", // gray-50 - Clean canvas
        surface: {
          DEFAULT: "#F5F5F5", // gray-100 - Subtle elevation
          hover: "#EEEEEE", // gray-200
        },
        // Text Colors
        text: {
          primary: "#212121", // gray-800 - Strong contrast
          secondary: "#616161", // gray-600 - Clear hierarchy
          muted: "#9E9E9E", // gray-500
          disabled: "#BDBDBD", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#388E3C", // green-700 - Positive growth
          light: "#C8E6C9", // green-100
        },
        warning: {
          DEFAULT: "#F57C00", // orange-600 - Gentle urgency
          light: "#FFE0B2", // orange-100
        },
        error: {
          DEFAULT: "#D32F2F", // red-700 - Helpful concern
          light: "#FFCDD2", // red-100
        },
        // Border Colors
        border: {
          DEFAULT: "#E0E0E0", // gray-300
          light: "#F5F5F5", // gray-100
          dark: "#BDBDBD", // gray-400
        },
      },
      fontFamily: {
        // Headlines - Lora serif for trust and authority
        lora: ['Lora', 'serif'],
        // Body text - Inter for clean readability
        inter: ['Inter', 'sans-serif'],
        // Accents - Playfair Display for emotional resonance
        accent: ['Playfair Display', 'serif'],
        // Default sans-serif stack
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Default serif stack
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        // Typography scale optimized for agricultural content
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        // Extended spacing scale for agricultural layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        // Friendly, approachable border radius
        'DEFAULT': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        // Agricultural-appropriate shadow system
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'farmer-story': '0 8px 32px rgba(46, 125, 50, 0.15)', // Primary color shadow
      },
      animation: {
        // Natural growth animations
        'grow': 'grow 300ms ease-out',
        'fade-in': 'fadeIn 500ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        // Agricultural timing - natural and unhurried
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        // Organic easing functions
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        // Mobile-first breakpoints for rural connectivity
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}