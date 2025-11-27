import { tokens } from './src/styles/tokens'
import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        success: tokens.colors.success,
        danger: tokens.colors.danger,
        warning: tokens.colors.warning,
        info: tokens.colors.info,
        neutral: tokens.colors.neutral,
        text: tokens.colors.text,
        border: tokens.colors.border,
        background: tokens.colors.background,
        white: tokens.colors.white,
        black: tokens.colors.black,
      },
      spacing: tokens.spacing,
      fontFamily: tokens.typography.fontFamily,
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      width: tokens.width,
      height: tokens.height,
    },
  },
  plugins: [tailwindcssAnimate],
}

