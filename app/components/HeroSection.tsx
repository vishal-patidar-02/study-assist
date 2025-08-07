import { Send, BookOpen, Brain, Lightbulb, Users, Star, ArrowRight, Eye, Map } from 'lucide-react';
import { useState } from 'react';

export const HeroSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [visualMap, setVisualMap] = useState('');
  const [isGeneratingVisual, setIsGeneratingVisual] = useState(false);

  const handleSubmit = async (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse('');
    setVisualMap('');
    setIsGeneratingVisual(true);

    try { 
      const res = await fetch("/api/studyAssist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      

      if (!res.ok) throw new Error('Failed to get response');
      
      const data = await res.json();
      setResponse(data.explanation);

      // Simulate visual map generation delay      
      setTimeout(() => {
        setVisualMap(data.image);
        setIsGeneratingVisual(false);
      }, 2000);


    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, I encountered an error. Please try again.');
      setIsGeneratingVisual(false);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Concept Clarification",
      description: "Break down complex topics into digestible explanations"
    },
    {
      icon: <Map className="h-8 w-8 text-purple-500" />,
      title: "Visual Mind Maps",
      description: "AI-generated visual maps to help you understand and remember concepts"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Subject Mastery",
      description: "Get help with math, science, literature, and more"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Creative Learning",
      description: "Interactive examples and visual explanations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      subject: "Physics Student",
      text: "The visual maps made quantum mechanics finally click for me!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      subject: "Math Student", 
      text: "Seeing calculus concepts visually transformed my understanding.",
      rating: 5
    },
    {
      name: "Emma Davis",
      subject: "Biology Student",
      text: "The mind maps help me remember complex biological processes.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
              Learn Smarter with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Visuals</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
              Your personal AI tutor that creates visual mind maps for any topic. Get instant explanations, 
              interactive visual maps, and step-by-step guidance that helps you understand and remember.
            </p>

            {/* Interactive Prompt Input - Mobile Optimized */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-white/20">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask me anything! e.g., 'Explain photosynthesis in simple terms' or 'Help me understand calculus derivatives'"
                    className="w-full h-24 sm:h-32 px-3 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all text-sm sm:text-base"
                    disabled={isLoading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                        handleSubmit(e);
                      }
                    }}
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim() || isLoading}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Thinking...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      <span>Ask StudyAssist</span>
                    </>
                  )}
                </button>
              </div>

              {/* Response Display */}
              {response && (
                <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                  {/* Text Response */}
                  <div className="p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-200 whitespace-pre-wrap text-sm sm:text-base">{response}</div>
                    </div>
                  </div>

                  {/* Visual Map Section */}
                  <div className="p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                      <h3 className="text-base sm:text-lg font-semibold text-white">Visual Mind Map</h3>
                    </div>
                    
                    {isGeneratingVisual ? (
                      <div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-3 sm:space-y-4">
                        <div className="relative">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                          <Map className="absolute inset-0 m-auto h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base">Generating visual map for your topic...</p>
                      </div>
                    ) : visualMap ? (
                      <div className="space-y-3 sm:space-y-4">
                        <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
                          <img
                            src={visualMap}
                            alt={`Visual mind map for: ${prompt}`}
                            className="w-full h-auto rounded-lg shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const placeholder = target.nextElementSibling as HTMLElement;
                              if (placeholder) placeholder.style.display = 'flex';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div className="hidden w-full h-48 sm:h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg items-center justify-center flex-col space-y-3 sm:space-y-4 border-2 border-dashed border-white/30">
                            <Map className="h-8 w-8 sm:h-12 sm:w-12 text-white/60" />
                            <div className="text-center text-white/80 px-4">
                              <p className="font-semibold text-sm sm:text-base">Visual Mind Map</p>
                              <p className="text-xs sm:text-sm text-white/60">AI-generated concept visualization for:</p>
                              <p className="text-xs sm:text-sm font-medium">"{prompt}"</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 text-center">
                          💡 This visual map helps you understand and remember the key concepts better!
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>50,000+ students helped</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                <span>Visual learning enhanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 py-12 sm:py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-16" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
            Why Choose StudyAssist?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-16" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>How It Works</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white text-xl sm:text-2xl font-bold">1</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Ask Your Question</h3>
              <p className="text-gray-300 text-sm sm:text-base">Type any concept, problem, or topic you need help with</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto text-white text-xl sm:text-2xl font-bold">2</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">AI Analyzes</h3>
              <p className="text-gray-300 text-sm sm:text-base">Our AI breaks down your question and finds the best approach</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white text-xl sm:text-2xl font-bold">3</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Get Clear Answers</h3>
              <p className="text-gray-300 text-sm sm:text-base">Receive step-by-step explanations tailored to your level</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-white text-xl sm:text-2xl font-bold">4</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Visualize & Remember</h3>
              <p className="text-gray-300 text-sm sm:text-base">See AI-generated mind maps that help you understand and retain concepts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 sm:px-6 py-12 sm:py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-16" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
            What Students Say
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{testimonial.subject}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
            Join thousands of students who are already learning smarter with AI-powered visual maps
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 mx-auto group text-sm sm:text-base">
            <span>Start Learning Now</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;