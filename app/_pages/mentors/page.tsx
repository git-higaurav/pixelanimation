import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Mentors() {
    const mentors = [
        {
            name: "Deepak Pal",
            // role: "Senior Graphic Designer",
            expertise: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "InDesign", "Photoshop"],
            image: "/mentor/deepak.jpg",
            // experience: "8+ Years",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "https://www.instagram.com/pixel.animation.edu0"
            }
        },
        // {
        //     name: "Priya Patel",
        //     role: "Motion Graphics Expert", 
        //     expertise: ["After Effects", "Cinema 4D", "3D Animation"],
        //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
        //     experience: "6+ Years",
        //     social: {
        //         linkedin: "#",
        //         twitter: "#",
        //         instagram: "#"
        //     }
        // },
        // {
        //     name: "Amit Kumar",
        //     role: "Video Editor & Colorist",
        //     expertise: ["Premiere Pro", "DaVinci Resolve", "Color Grading"],
        //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
        //     experience: "7+ Years",
        //     social: {
        //         linkedin: "#",
        //         twitter: "#",
        //         instagram: "#"
        //     }
        // }
    ];

    return (
        <section className="py-20 bg-white" id="mentors">
            <div className="wrapper max-w-[1400px] mx-auto px-3">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Expert Mentors</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Learn from industry professionals with years of real-world experience
                    </p>
                </div>

                <div className={`grid gap-8 ${
                    mentors.length === 1 
                        ? 'grid-cols-1 place-items-center' 
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                    {mentors.map((mentor, index) => (
                        <div 
                            key={index}
                            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group ${
                                mentors.length === 1 ? 'w-full max-w-[400px]' : 'w-full'
                            }`}
                        >
                            <div className="relative h-[300px] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img 
                                        src={mentor.image} 
                                        alt={mentor.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                                    {/* <p className="text-primary mb-2">{mentor.role}</p> */}
                                    {/* <p className="text-white/80 text-sm">{mentor.experience} Experience</p> */}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4">
                                        <a href={mentor.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={mentor.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={mentor.social.instagram} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <Link href={`https://www.instagram.com/pixel.animation.edu0` } target="_blank">
                                        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
                                            View Profile
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}