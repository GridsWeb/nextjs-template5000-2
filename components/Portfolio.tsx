'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
    title: string;
    client: string;
    imageSrc: string; // URL ของภาพปกวิดีโอ หรือ Thumbnails
}

// ข้อมูลตัวอย่างสำหรับ Portfolio
const portfolioData: PortfolioItemProps[] = [
    { title: 'รีวิว Gaming Gear สุดปัง', client: 'Client A: TechBrand', imageSrc: '/images/port-1.jpg' },
    { title: 'Vlog ตะลุยกินคาเฟ่สีพาสเทล', client: 'Personal Project', imageSrc: '/images/port-2.jpg' },
    { title: 'Challenge: 24 ชม. ในห้างสรรพสินค้า', client: 'Client B: RetailChain', imageSrc: '/images/port-3.jpg' },
    { title: 'Beauty Product Unboxing', client: 'Client C: CosmeticBrand', imageSrc: '/images/port-4.jpg' },
];

// ใช้ Image Component ของ Next.js หากมี
// import Image from 'next/image';

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, client, imageSrc }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.03 }} // Pop-out เล็กน้อยเมื่อ Hover
            transition={{ duration: 0.3 }}
        >
            {/* Placeholder image (ควรแทนที่ด้วย Next.js Image Component) */}
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                {/* <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" /> */}
                <p className='text-xl font-bold text-gray-600'>[Video Thumbnail]</p>
            </div>

            {/* Overlay สำหรับข้อมูล */}
            <div className="absolute inset-0 bg-primary-blue/70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-highlight-yellow">{client}</p>
                <button className="mt-2 text-sm text-white font-semibold underline hover:text-accent-pink">
                    ดูวิดีโอ ↗
                </button>
            </div>
        </motion.div>
    );
};

const Portfolio: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section id="portfolio" className="py-24 px-12 bg-primary-blue/10">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    My <span className="text-pink-600">Portfolio</span> & Work Samples
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {portfolioData.map((item, index) => (
                        <motion.div key={index} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                            <PortfolioItem {...item} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-pink-600 text-white text-lg font-bold rounded-full shadow-xl hover:bg-primary-blue transition duration-300 transform hover:scale-105">
                        Load More Videos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;