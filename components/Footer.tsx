import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 text-center">
            <div className="container mx-auto">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Alex | Video Content Creator Portfolio.
                    <span className="text-accent-pink ml-2">All rights reserved.</span>
                </p>
                <p className="text-xs mt-1 text-gray-400">
                    Powered by Next.js and Tailwind CSS 🚀
                </p>
            </div>
        </footer>
    );
};

export default Footer;