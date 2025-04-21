/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",     // 🔧 背景色用於 body
        primary: "#2563eb",        // 🔧 主色按鈕與連結
        muted: "#6b7280",          // 🔧 次色／輔助字
        card: "#ffffff",           // 🔧 卡片背景
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};