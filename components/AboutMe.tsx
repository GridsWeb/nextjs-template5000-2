'use client';

import React from 'react';
// นำเข้า Type ที่จำเป็น
import { motion, Variants, Transition } from 'framer-motion';

// กำหนด Type Variants ให้กับตัวแปร
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        } as Transition, // ระบุ Transition Type ให้ชัดเจน
    },
};

// กำหนด Type Variants ให้กับตัวแปร
const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        // แก้ไข: ใช้ as Transition เพื่อช่วย TypeScript
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15
        } as Transition,
    },
};

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-24 px-16 bg-pink-50">
            <div className="container mx-auto">
                {/* หัวข้อ */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    👋 About <span className="text-pink-600">Me</span>
                </motion.h2>

                {/* เนื้อหาหลัก */}
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // แอนิเมชันจะทำงานเมื่อผู้ใช้เลื่อนมาเห็น
                    viewport={{ once: true, amount: 0.3 }} // ทำงานครั้งเดียวและเมื่อเห็น 30% ของส่วน
                >
                    {/* คอลัมน์ซ้าย: ข้อความ */}
                    <div className="space-y-6">
                        <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed border-l-4 border-primary-blue pl-4 italic">
                            "เปลี่ยนไอเดียธรรมดาให้กลายเป็นวิดีโอที่ไวรัลได้! ผมเชื่อว่าการสื่อสารที่ดีที่สุดคือการสร้างความสนุกและประสบการณ์ที่น่าจดจำ"
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-gray-700">
                            ด้วยประสบการณ์กว่า 5 ปี ในวงการ Digital Content ผมเชี่ยวชาญในการสร้างวิดีโอรีวิวสินค้า, Vlog สไตล์วัยรุ่น, และคอนเทนต์สำหรับ TikTok/YouTube Shorts ที่เน้นความสดใสและเข้าถึงง่าย
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg font-semibold text-gray-700">
                            ✨ ทักษะหลัก: Video Production, Script Writing (Eng/Thai), Social Media Strategy, และการดึง Mood & Tone แบบ Teen-Focus.
                        </motion.p>

                        <motion.button variants={itemVariants} className="mt-4 px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow-md hover:bg-accent-pink transition duration-300 transform hover:scale-105">
                            ดู CV ฉบับเต็ม
                        </motion.button>
                    </div>

                    {/* คอลัมน์ขวา: รูปภาพ/กราฟิก */}
                    <motion.div variants={itemVariants} className="flex justify-center">
                        {/*  */}
                        <div className="w-full max-w-sm h-72 bg-highlight-yellow rounded-3xl shadow-xl flex items-center justify-center p-4 border-8 border-accent-pink/50">
                            <p className='text-3xl font-black text-gray-800'>[Graphic Placeholder]</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;