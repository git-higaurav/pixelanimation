import { Award, Briefcase, Clock, Users } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Users className="w-12 h-12 text-primary" />,
            title: "Expert Mentors",
            description: "Learn from industry professionals with years of real-world experience in design and animation."
        },
        {
            icon: <Briefcase className="w-12 h-12 text-primary" />,
            title: "Hands-on Projects",
            description: "Work on real client projects and build a professional portfolio during your course."
        },
        {
            icon: <Clock className="w-12 h-12 text-primary" />,
            title: "Flexible Learning",
            description: "Choose from morning or evening batches to fit your schedule. Small batch sizes for personalized attention."
        },
        {
            icon: <Award className="w-12 h-12 text-primary" />,
            title: "Placement Support",
            description: "Get career guidance, portfolio reviews, and placement assistance after course completion."
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="features">
            <div className="wrapper max-w-[1400px] mx-auto px-3">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Pixel Animation?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide the perfect environment for creative growth with industry-standard tools and expert guidance.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}