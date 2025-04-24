"use client"
import { AlignRight, ChevronDown, Clock, Facebook, Instagram, Mail, Phone, X, Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
    const [showCourseMenu, setShowCourseMenu] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        {
            label: "Courses",
            href: "/courses",
            submenu: [
                { label: "Graphic Design", href: "#courses" },
                { label: "Motion Design", href: "#courses" },
                { label: "Video Editing", href: "#courses" }
            ]
        },
        { label: "Mentors", href: "#mentors" },
        { label: "Success Stories", href: "#success-stories" },
        { label: "Contact", href: "#contact" }
    ];

    const toggleSubmenu = (index: number) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const handleCourseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowCourseMenu(!showCourseMenu);
    };

    const handleMouseLeave = () => {
        setShowCourseMenu(false);
    };

    return(
        <header className="flex justify-center items-center bg-title text-white flex-col relative">
            <div className="wrapper w-full max-w-[1400px] py-2.5 px-4">
                <div className="flex justify-center md:justify-between items-center">
                    <section className="flex items-center gap-4 md:gap-6">
                        <a href="tel:+918077331575" className="flex items-center gap-2 hover:text-primary transition-colors mx-auto md:mx-0">
                            <Phone size={16} />
                            <span className="text-sm whitespace-nowrap">+91 8077331575</span>
                        </a>
                        <a href="mailto:support@thepixelanimation.com" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={16} />
                            <span className="text-sm whitespace-nowrap">support@thepixelanimation.com</span>
                        </a>
                        <div className="hidden lg:flex items-center gap-2">
                            <Clock size={16} />
                            <span className="text-sm whitespace-nowrap">Mon-Sat 10:00 - 6:00</span>
                        </div>
                    </section>
                    
                    <section className="hidden md:flex items-center gap-6">
                        <span className="text-sm">Follow Us:</span>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/1C1XVFx9nt/" target="_blank" className="hover:text-primary transition-transform hover:scale-110" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/pixel.animation.edu0" target="_blank" className="hover:text-primary transition-transform hover:scale-110" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="hover:text-primary transition-transform hover:scale-110" aria-label="Youtube">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <div className="flex justify-center items-center w-full bg-smoke text-title py-5 px-3">
                <div className="wrapper w-full max-w-[1400px] flex justify-between items-center">
                    <section className="flex items-center gap-5">
                        <img 
                            src="/logo/logo.png" 
                            alt="logo" 
                            className="max-w-[50px]" 
                        />
                        <h1 className="text-title font-bold text-xl">
                            Pixel Animation
                        </h1>
                        <nav className="hidden md:flex md:items-center md:gap-8">
                            {menuItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className="relative"
                                >
                                    <div className="flex items-center gap-1">
                                        <Link 
                                            href={item.href} 
                                            className="hover:text-primary transition-colors"
                                            onClick={(e) => item.submenu && handleCourseClick(e)}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.submenu && <ChevronDown className="w-4 h-4" />}
                                    </div>
                                    {item.submenu && showCourseMenu && (
                                        <div 
                                            className="absolute bg-white shadow-lg rounded-lg p-4 min-w-[200px] top-full left-0 mt-2 z-50"
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link 
                                                    key={subIndex}
                                                    href={subItem.href} 
                                                    className="block py-2 text-gray-800 hover:text-primary"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </section>
                    <section className="flex items-center gap-4">
                        <Link href="/coming-soon" className="">
                            <button className="bg-primary text-white cursor-pointer  py-3 px-8 hidden md:flex hover:bg-primary/90 transition-colors">
                                Login
                            </button>
                        </Link>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden z-50"
                        >
                            {isMenuOpen ? (
                                <X size={32} className="text-primary" />
                            ) : (
                                <AlignRight size={32} />
                            )}
                        </button>
                    </section>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div 
                className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6 pt-24">
                    <nav className="flex flex-col gap-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 pb-4">
                                <div 
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => item.submenu && toggleSubmenu(index)}
                                >
                                    <Link 
                                        href={item.href}
                                        className="text-xl font-medium text-gray-800 hover:text-primary transition-colors"
                                        onClick={(e) => item.submenu && e.preventDefault()}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.submenu && (
                                        <ChevronDown 
                                            className={`w-5 h-5 transition-transform duration-200 ${
                                                activeSubmenu === index ? 'rotate-180' : ''
                                            }`}
                                        />
                                    )}
                                </div>
                                {item.submenu && (
                                    <div 
                                        className={`mt-2 ml-4 space-y-2 transition-all duration-200 ${
                                            activeSubmenu === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                        }`}
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link 
                                                key={subIndex}
                                                href={subItem.href}
                                                className="block py-2 text-gray-600 hover:text-primary transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/coming-soon">
                            <button className="bg-primary text-white py-3 px-8 mt-4 hover:bg-primary/90 transition-colors w-full">
                                Login
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}