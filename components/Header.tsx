'use client'; // ต้องใช้ 'use client' เพราะเราใช้ Framer Motion

import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }} // เริ่มจากข้างบนและจางหายไป
            animate={{ y: 0, opacity: 1 }} // เคลื่อนลงมาและปรากฏขึ้น
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
            className="sticky top-0 z-50 p-4 backdrop-blur-md bg-white/70 shadow-lg"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* โลโก้/ชื่อ: ใช้สีชมพูเป็นตัวเน้น */}
                <a href="#" className="text-2xl font-black text-pink-600 hover:text-primary-blue transition duration-300">
                    CREATOR
                    <span className="text-blue-600">.ME</span>
                </a>

                {/* เมนูนำทาง */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="text-gray-800 font-semibold text-lg hover:text-accent-pink transition duration-200 relative group"
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.name}
                            {/* แอนิเมชันขีดเส้นใต้ */}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </motion.a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;