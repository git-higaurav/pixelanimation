import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "#courses" },
        { name: "Mentors", href: "#mentors" },
        { name: "Success Stories", href: "#success-stories" },
        { name: "Contact", href: "#contact" }
    ];

    const courses = [
        { name: "Graphic Design", href: "#courses" },
        { name: "Motion Design", href: "#courses" },
        { name: "Video Editing", href: "#courses" }
    ];

    return (
        <footer className="bg-title text-white">
            <div className="wrapper max-w-[1400px] mx-auto px-3 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <img src="/logo/logo.png" alt="Pixel Animation" className="w-16 mb-4" />
                        <p className="text-gray-300 mb-4">
                            Empowering creative minds with industry-relevant design education and hands-on training.
                        </p>
                        <div className="flex gap-4">
                           <Link href="https://www.facebook.com/share/1C1XVFx9nt/" target="_blank" className="hover:text-primary transition-transform hover:scale-110" aria-label="Facebook">
                           <Facebook size={20} />
                           </Link>
                           <Link href="#" target="_blank" className="hover:text-primary transition-transform hover:scale-110" aria-label="Instagram">
                           <Instagram size={20} />
                           </Link>
                           <Link href="#" target="_blank" className="hover:text-primary transition-transform hover:scale-110" aria-label="Youtube">
                           <Youtube size={20} />
                           </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            {courses.map((course, index) => (
                                <li key={index}>
                                    <Link 
                                        href={course.href}
                                        className="text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 text-primary" />
                                <span className="text-gray-300">
                                Pachenda road near by gandhi colony<br />
                                muzaffarnagar (251001) U.P
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-gray-300">+91 8077331575</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-gray-300">support@thepixelanimation.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Pixel Animation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}