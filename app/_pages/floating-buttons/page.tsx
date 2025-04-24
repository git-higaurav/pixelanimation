import { MessageSquare, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function FloatingButtons() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 md:hidden">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
                {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {isExpanded && (
                <>
                    <a
                        href="https://wa.me/918077331575"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                    >
                        <MessageSquare className="w-6 h-6" />
                    </a>
                    <a
                        href="tel:+918077331575"
                        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
                    >
                        <Phone className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.google.com/maps?q=29.4790242,77.7199172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
                    >
                        <MapPin className="w-6 h-6" />
                    </a>
                </>
            )}
        </div>
    );
} 