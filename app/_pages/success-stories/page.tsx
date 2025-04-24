"use client"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

export default function SuccessStories() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const successStories = [
        {
            name: "Ananya Singh",
            role: "Graphic Designer",
            company: "Design Studio",
            testimonial: "The courses at Pixel Animation helped me transition from a traditional artist to a digital designer. The hands-on projects and mentor guidance were invaluable.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60"
        },
        {
            name: "Rohan Mehta", 
            role: "Motion Designer",
            company: "Animation Studio",
            testimonial: "The motion design course transformed my career. I went from basic animations to creating complex motion graphics for major brands.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60"
        },
        {
            name: "Priya Verma",
            role: "Video Editor at Media House",
            image: "/images/students/student-3.jpg",
            testimonial: "The practical approach to learning and the state-of-the-art facilities made all the difference. I'm now working on major projects for top clients!",
            course: "Video Editing",
            beforeImage: "/images/portfolio/before-3.jpg",
            afterImage: "/images/portfolio/after-3.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % successStories.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    return (
        <section className="py-20 bg-gray-50" id="success-stories">
            <div className="wrapper max-w-[1400px] mx-auto px-3">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our students who have transformed their careers
                    </p>
                </div>

                <div className="relative px-16"> {/* Added padding to prevent button overflow */}
                    <div className="flex items-center">
                        <button 
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors z-10"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>

                        <div className="flex-1">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 lg:p-12 min-h-[450px] flex items-center">
                                <div className="flex flex-col items-center text-center w-full">
                                    <div className="relative mb-8">
                                        <img 
                                            src={successStories[currentSlide].image} 
                                            alt={successStories[currentSlide].name}
                                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md">
                                            <Quote className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-semibold mb-2">{successStories[currentSlide].name}</h3>
                                    <p className="text-primary text-base lg:text-lg mb-6">{successStories[currentSlide].role} at {successStories[currentSlide].company}</p>
                                    <p className="text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
                                        {successStories[currentSlide].testimonial}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors z-10"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {successStories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}