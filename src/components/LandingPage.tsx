
import React, { useState } from 'react';
import { Music, Play, Users, Star, Award, BookOpen, Headphones, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AuthModal from './AuthModal';

const LandingPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Interactive Courses",
      description: "AI-powered personalized learning paths with real-time feedback"
    },
    {
      icon: <Headphones className="w-8 h-8 text-secondary" />,
      title: "Practice Tools",
      description: "Virtual instruments and practice sessions with progress tracking"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Global Community",
      description: "Connect with musicians worldwide and collaborate on projects"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Certifications",
      description: "Earn recognized certificates and showcase your musical achievements"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "200+", label: "Courses Available" },
    { number: "15+", label: "Instruments" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">MusicEd Pro</span>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => handleAuthClick('login')}
                className="hover:bg-primary/10"
              >
                Login
              </Button>
              <Button 
                onClick={() => handleAuthClick('signup')}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master Music with
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI-Powered</span>
              <br />Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the world's most advanced music education platform. Learn any instrument, 
              master music theory, and connect with a global community of musicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => handleAuthClick('signup')}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
              >
                Start Learning Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="mt-16 animate-float">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-white/30">
                <div className="grid grid-cols-3 gap-4 opacity-75">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-16 bg-white/50 rounded-lg animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Excel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with proven teaching methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of students who have transformed their musical abilities with our platform
            </p>
            <Button 
              size="lg" 
              onClick={() => handleAuthClick('signup')}
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-8 py-4 text-lg"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Music className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">MusicEd Pro</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Courses</a>
              <a href="#" className="hover:text-white transition-colors">Community</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MusicEd Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </div>
  );
};

export default LandingPage;
