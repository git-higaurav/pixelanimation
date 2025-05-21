"use client"
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  company: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sumit Pal',
    role: 'Graphic & Motion Designer',
    company: 'Zennex Media',
    image: '/placement/sumitpal.webp',
  },
  {
    name: 'Chetan Singh',
    role: 'Graphic & Motion Designer',
    company: 'Flixstock Pvt. Ltd', 
    image: '/placement/chetan.jpg',
  },
  {
    name: 'Tarun Sharma', 
    role: 'Graphic Artist',
    company: 'Arow pack',
    image: '/placement/Tarun-sharma.jpg',
  },
  {
    name: 'Sagar Sharma',
    role: 'Video Editor  & Motion ',
    company: 'RAF Stationary Manufacturing',
    image: '/placement/test.jpg',
  }
];

export default function PlacementPage() {
  return (
    <div className="min-h-[100vh] lg:min-h-[90vh] bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Success Stories That Inspire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our alumni are creating impact through design across leading organizations. Their journey could be your tomorrow.
          </p>
          
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600">Successful Alumni</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600">Career Support</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 content-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 md:h-80 lg:h-[400px] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {member.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300" onClick={() => window.open('https://wa.me/918077331575?text=Hi%20Pixel%20Animation%2C%20I%20am%20interested%20in%20joining%20your%20courses.%20Please%20provide%20more%20information%20about%20placement%20opportunities.', '_blank')}>
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}