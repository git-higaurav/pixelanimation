"use client"
import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';

// Define types
interface Pixel {
  id: number;
  color: string;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

const PixelAnimationComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [pixels, setPixels] = useState<Pixel[]>([]);

  // Generate animated pixel elements
  useEffect(() => {
    const generatePixels = (): void => {
      const newPixels: Pixel[] = [];
      const colors: string[] = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-pink-500'];
      
      for (let i = 0; i < 30; i++) {
        newPixels.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.floor(Math.random() * 25) + 5,
          top: Math.floor(Math.random() * 100),
          left: Math.floor(Math.random() * 100),
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10
        });
      }
      setPixels(newPixels);
    };
    
    generatePixels();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real application, you would send this to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
      {/* Animated pixels background */}
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className={`absolute ${pixel.color} opacity-20 rounded-sm`}
          style={{
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            top: `${pixel.top}%`,
            left: `${pixel.left}%`,
            animation: `float ${pixel.duration}s ease-in-out ${pixel.delay}s infinite alternate`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(20px, 20px) rotate(45deg);
          }
        }
      `}</style>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 flex items-center justify-center">
            <div className="flex items-center space-x-1">
              {['red', 'green', 'blue', 'yellow'].map((color, index) => (
                <div 
                  key={index} 
                  className={`w-5 h-5 ${
                    color === 'red' ? 'bg-red-500' : 
                    color === 'green' ? 'bg-green-500' : 
                    color === 'blue' ? 'bg-blue-500' : 
                    'bg-yellow-500'
                  }`}
                />
              ))}
            </div>
            <h1 className="text-3xl font-bold ml-3">ThePixelAnimation</h1>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are crafting something amazing! ThePixelAnimation will bring cutting-edge 
            animation tools and resources to creative professionals worldwide.
          </p>

          {/* Notification form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto mb-12">
              <div className="relative flex-grow mb-3 sm:mb-0 sm:mr-3">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
              >
                Notify Me
                <ArrowRight className="ml-1 h-5 w-5" />
              </button>
            </form>
          ) : (
            <div className="bg-gray-800 border-l-4 border-purple-500 p-4 mb-12 max-w-md mx-auto">
              <p className="text-purple-100">Thanks! We will notify you when we launch.</p>
            </div>
          )}

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="YouTube">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ThePixelAnimation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PixelAnimationComingSoon;