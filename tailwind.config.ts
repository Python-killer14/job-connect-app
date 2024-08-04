import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "sm-plus": "704px",
        "md-plus": "896px",
        "lg-plus": "1152px",
      },
      padding: {
        "minus-nav-bar": "64px",
      },
      height: {
        "full-h-minus-nav": "calc(100dvh - 64px)"
      },
      boxShadow: {
        "top-shadow": "0px -8px 28px -18px rgba(0, 0, 0, .34)"
      },

      maxHeight: {
        "detail-height": "calc(100vh - 260px)"
      },

      colors: {
        // Manual defintions
        "light-rose": "#FFEEEA",
        "rose-red": "#F2786D",
        "darker-red-rose": "#bf463b",
        "leaf-green": "#30D949",
        "ocean-blue": "#24B0BF",
        "light-blue-2": "#e3f4fa",
        "light-blue": "#F4FAFC",
        "gun-metal": "#2c3539c6",
        "hover-gray": "#EFEDEC",
        "white-gray": "#F8FAFC",
        "blue-border": "#1f6feb",


        // Default Shadcn ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          "darker": "#C7CDD2",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config