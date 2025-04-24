"use client"
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setIsSubscribed(true);
        setError("");
    };

    return (
        <section className="py-20 bg-primary text-white" id="newsletter">
            <div className="wrapper max-w-[1400px] mx-auto px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-lg mb-0 text-white/80">
                            Subscribe to our newsletter for the latest design trends and exclusive offers.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                        {isSubscribed ? (
                            <p className="text-white/80 text-center">
                                Thanks for subscribing! Check your inbox for confirmation.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex gap-4">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/20 border border-white/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/50"
                                        placeholder="Enter your email"
                                    />
                                    {error && <p className="absolute text-red-300 text-sm mt-1">{error}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-white text-primary px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/90"
                                >
                                    Subscribe
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}