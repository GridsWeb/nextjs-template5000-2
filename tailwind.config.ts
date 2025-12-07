import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}', // ตรวจสอบเส้นทางของไฟล์โค้ดคุณ
    ],
    theme: {
        extend: {
            colors: {
                // กำหนดสีหลักสำหรับธีมวัยรุ่นสดใส
                'primary-blue': '#38bdf8', // sky-400
                'accent-pink': '#ec4899', // pink-500
                'highlight-yellow': '#fde047', // yellow-300
            },
            animation: {
                // แอนิเมชันง่ายๆ ที่จะใช้กับ Framer Motion
                'gradient-pulse': 'gradient-pulse 3s ease infinite',
            },
            keyframes: {
                'gradient-pulse': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}

export default config