"use client"
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, User, X } from "lucide-react";
import { useState } from "react";
import { formSchema } from "@/app/lib/validation";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const validateForm = () => {
        try {
            formSchema.parse(formData);
            return true;
        } catch (error: any) {
            const newErrors: Record<string, string> = {};
            if (error.errors) {
                error.errors.forEach((err: any) => {
                    newErrors[err.path[0]] = err.message;
                });
            }
            setErrors(newErrors);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            // Show thank you modal instead of redirecting
            setShowThankYou(true);
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                course: "",
                message: ""
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ submit: error instanceof Error ? error.message : 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error for the field being changed
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section className="py-20" id="contact">
            {/* Thank You Modal */}
            {showThankYou && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
                        <button
                            onClick={() => setShowThankYou(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="text-center">
                            <Send className="w-16 h-16 text-primary mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                            <p className="text-gray-600 mb-6">
                                We've received your message and will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setShowThankYou(false)}
                                className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="wrapper max-w-[1400px] mx-auto px-3">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our courses? We're here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-lg p-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-medium mb-1">Address</h4>
                                        <p className="text-gray-600">
                                        Pachenda road near by gandhi colony<br />
                                        muzaffarnagar (251001) U.P
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-medium mb-1">Phone</h4>
                                        <p className="text-gray-600">+91 8077331575</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-medium mb-1">Email</h4>
                                        <p className="text-gray-600">support@thepixelanimation.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-medium mb-1">Working Hours</h4>
                                        <p className="text-gray-600">
                                            Monday - Saturday: 10:00 AM - 6:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-80 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.12345678901234!3d28.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-sm font-medium mb-2">
                                    Course Interest
                                </label>
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                                >
                                    <option value="">Select a course</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="motion-design">Motion Design</option>
                                    <option value="video-editing">Video Editing</option>
                                </select>
                                {errors.course && <p className="text-red-500 text-sm mt-2">{errors.course}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                            </div>

                            {errors.submit && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                                    {errors.submit}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 