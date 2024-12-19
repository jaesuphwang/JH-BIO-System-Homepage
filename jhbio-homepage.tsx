import React from 'react';
import { Layout } from 'lucide-react';

const HomePage = () => {
  const technologies = [
    {
      title: "Advanced Video AI Solutions",
      items: [
        "Fashion Recognition: AI-powered detection with 95%+ accuracy",
        "Scene Analysis: Adaptive detection using deep learning",
        "Real-Time Integration: Seamless recommendations"
      ]
    },
    {
      title: "AI-Driven Smart Factory Systems",
      items: [
        "SmartOCR: Multilingual solution for 80+ languages",
        "Surface Defect Detection: Automated manufacturing analysis",
        "Smart Surface Detection: High-speed error identification"
      ]
    },
    {
      title: "Healthcare AI Innovations",
      items: [
        "SmartEndoScope: Cancer lesion detection with 90%+ accuracy",
        "Medical AI Integration: Collaborative imaging tools"
      ]
    },
    {
      title: "Enterprise AI Tools",
      items: [
        "SmartQuery: RAG system for data analysis",
        "SmartCODE: SAP ABAP code automation",
        "SmartRAG: Advanced LLM solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Leading AI Innovation for a Smarter Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Redefining the boundaries of global online video commerce and enterprise AI through technological innovation.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Innovation</h3>
              <p>Revolutionize industries with artificial intelligence, offering real-time solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Leadership</h3>
              <p>Lead the market with scalable, sustainable, and user-centric AI technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Experience</h3>
              <p>Provide personalized and efficient experiences for global consumers and enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <p className="text-gray-600">SAP Enterprises Worldwide</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%+</div>
              <p className="text-gray-600">AI Recognition Accuracy</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
              <p className="text-gray-600">Supported Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join the AI Revolution</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="font-semibold mb-4">For Enterprises</h3>
              <p className="text-gray-600">Transform operations and enhance accuracy with our AI solutions.</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-4">For Partners</h3>
              <p className="text-gray-600">Collaborate with us to bring cutting-edge AI tools to market.</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-4">For Investors</h3>
              <p className="text-gray-600">Be part of our journey to $300M annual revenue by 2028.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">070-7607-2489</p>
              <p className="text-gray-300">www.jhbiosystem.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Location</h3>
              <p className="text-gray-300">1607, Building A, 97 Centum Jungang-ro</p>
              <p className="text-gray-300">Haeundae-gu, Busan</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Video AI</li>
                <li>Smart Factory</li>
                <li>Healthcare AI</li>
                <li>Enterprise Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="text-gray-300 space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 JH Bio System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
