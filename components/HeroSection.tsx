'use client';

import React from 'react';
import { motion } from 'framer-motion';
// สมมติว่ามีรูปภาพ/วิดีโอโปรไฟล์ของคุณใน public/profile.png
// หรือใช้ Image Component ของ Next.js
// หากเป็นวิดีโอ ให้ใช้ <video> แท็กแทน 
// 

const HeroSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // ทำให้ Element ภายในปรากฏทีละชิ้น
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-primary-blue/10 pt-8">
            <div className="container mx-auto px-16 py-4 md:py-0 grid md:grid-cols-2 gap-10 items-center">
                {/* ส่วนข้อความ */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 font-bold uppercase mb-2">
                        Hey there! Welcome to my world! 🚀
                    </motion.p>
                    <motion.h1 variants={itemVariants} className="text-5xl text-pink-600 md:text-7xl font-extrabold leading-tight text-gray-900 mb-4">
                        I'm <span className="text-primary-blue">Alex</span>,
                        <br />
                        Your <span className="text-accent-pink">Video Content Creator</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8">
                        สร้างสรรค์วิดีโอที่สนุกและน่าสนใจสำหรับแบรนด์ที่เข้าใจวัยรุ่น! รับงานรีวิวสินค้าและทำ Viral Content!
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <button className="px-8 py-3 bg-pink-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-primary-blue transition duration-300 transform hover:scale-105 active:scale-95">
                            Let's Talk! 💬
                        </button>
                    </motion.div>
                </motion.div>

                {/* ส่วนรูปภาพ/วิดีโอ */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className="order-first md:order-last flex justify-center"
                >
                    {/* โค้ดสำหรับวิดีโอโปรไฟล์ (แทนที่ด้วย Source ของคุณ) */}
                    <video
                        className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-highlight-yellow aspect-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        {/* ใช้ placeholder video เพื่อให้เห็นภาพ */}
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;