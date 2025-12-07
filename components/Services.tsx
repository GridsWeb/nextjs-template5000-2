'use client';

import React from 'react';
// นำเข้า Type ที่จำเป็น
import { motion, Variants, Transition } from 'framer-motion';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    colorClass: string;
}

const servicesData: ServiceCardProps[] = [
    {
        icon: '🎥',
        title: 'Product Review (Viral Style)',
        description: 'สร้างวิดีโอรีวิวสินค้าที่เข้าถึงกลุ่มเป้าหมายวัยรุ่นได้อย่างรวดเร็วและเป็นธรรมชาติ.',
        colorClass: 'bg-primary-blue/20 border-primary-blue',
    },
    {
        icon: '🎬',
        title: 'Short-Form Content (TikTok/Reels)',
        description: 'ผลิตวิดีโอสั้นคุณภาพสูงที่ดึงดูดใจและเพิ่มการมีส่วนร่วมบนแพลตฟอร์ม Social Media.',
        colorClass: 'bg-accent-pink/20 border-accent-pink',
    },
    {
        icon: '✍️',
        title: 'Concept & Script Development',
        description: 'ช่วยคิดไอเดีย, เขียนบท, และวางแผนการถ่ายทำที่สะท้อนแบรนด์และถูกใจผู้ชม.',
        colorClass: 'bg-highlight-yellow/40 border-highlight-yellow',
    },
];

const cardVariants: Variants = { // กำหนด Type Variants
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        // แก้ไข: ใช้ as Transition เพื่อช่วย TypeScript
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 10
        } as Transition,
    },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, colorClass }) => (
    <motion.div
        className={`p-6 rounded-2xl shadow-lg border-b-8 ${colorClass} transition duration-300 hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer`}
        variants={cardVariants}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-pink-600 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-12 bg-white">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="text-pink-600">Services</span>
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;