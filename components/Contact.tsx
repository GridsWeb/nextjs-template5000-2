'use client';

import React from 'react';
import { motion } from 'framer-motion';
// 1. นำเข้า Font Awesome Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 2. นำเข้า Icons ที่ต้องการจาก free-brands-svg-icons
import {
    faYoutube,
    faTiktok,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-primary-blue/20">
            <div className="container mx-auto max-w-3xl">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Let's <span className="text-pink-600">Collaborate!</span>
                </motion.h2>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    ส่งข้อความถึงผมโดยตรง หรือติดต่อผ่านช่องทางด้านล่างได้เลยครับ!
                </motion.p>

                {/* Form Container (Placeholder for a functional form) */}
                <motion.form
                    className="bg-white p-8 rounded-2xl shadow-2xl space-y-6 border-b-8 border-pink-600"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">ชื่อของคุณ</label>
                        <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-200" placeholder="เช่น Alex Content" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">อีเมล</label>
                        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-200" placeholder="contact@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-1">รายละเอียดงาน</label>
                        <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-200" placeholder="ต้องการให้รีวิวสินค้าอะไร หรือมี Concept งานอย่างไร..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-pink-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-primary-blue transition duration-300 transform hover:scale-105">
                        Send Message! 💌
                    </button>
                </motion.form>

                {/* Social Links */}
                {/* Social Links: เปลี่ยนเป็น Icon */}
                <motion.div
                    className="flex justify-center space-x-8 mt-8" // เพิ่ม space-x จาก 6 เป็น 8 ให้อิสระขึ้น
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {/* YouTube Icon */}
                    <a
                        href="#"
                        className="text-pink-600 text-4xl hover:text-red-600 transition duration-300" // เปลี่ยนเป็น text-4xl และสี Hover เป็นสี YouTube
                        aria-label="YouTube Channel"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>

                    {/* TikTok Icon */}
                    <a
                        href="#"
                        className="text-pink-600 text-4xl hover:text-black transition duration-300" // สี TikTok
                        aria-label="TikTok Profile"
                    >
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>

                    {/* Instagram Icon */}
                    <a
                        href="#"
                        className="text-pink-600 text-4xl hover:text-fuchsia-600 transition duration-300" // เปลี่ยนสี Hover เป็นสี Instagram
                        aria-label="Instagram Profile"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;