// src/app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe'; // นำเข้า
import Services from '@/components/Services'; // นำเข้า
import Portfolio from '@/components/Portfolio'; // นำเข้า
import Testimonials from '@/components/Testimonials'; // นำเข้า
import Contact from '@/components/Contact'; // นำเข้า
import Footer from '@/components/Footer'; // นำเข้า

export default function Home() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden"> {/* เพิ่ม overflow-x-hidden เพื่อป้องกันปัญหา Layout Shift */}
            {/* 1. Header (Sticky) */}
            <Header />

            <main>
                {/* 2. Hero Section */}
                <HeroSection />

                {/* 3. About Me Section */}
                <AboutMe />

                {/* 4. Services Section */}
                <Services />

                {/* 5. Portfolio Section / Work Samples */}
                <Portfolio />

                {/* 6. Testimonials Section */}
                <Testimonials />

                {/* 7. Contact Section */}
                <Contact />
            </main>

            {/* 8. Footer */}
            <Footer />
        </div>
    );
}