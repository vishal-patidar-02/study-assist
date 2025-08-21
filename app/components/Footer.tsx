import { Brain, Users, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-8 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
                StudyAssist
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students with intelligent visual learning through AI-powered explanations and mind maps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4 mb-4">
                  {/* Twitter */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 
                      1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
                      1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                      0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 
                      2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
                      2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
                      1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 
                      2.348-7.29 2.04 2.179 1.397 4.768 2.212 
                      7.548 2.212 9.142 0 14.307-7.721 
                      13.995-14.646.962-.695 1.797-1.562 
                      2.457-2.549z"/>
                    </svg>
                  </a>
              
                  {/* GitHub */}
                  <a href="https://github.com/vishal-patidar-02" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-3.794 23.39c.6.111.82-.26.82-.577 
                      0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
                      1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 
                      1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.932 
                      0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 
                      0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.002 0c2.292-1.552 
                      3.298-1.23 3.298-1.23.655 1.652.243 2.873.119 3.176.77.84 
                      1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 
                      5.922.43.371.823 1.102.823 2.222 0 1.605-.015 2.898-.015 
                      3.293 0 .32.217.694.825.576A12.004 12.004 0 0 0 12 0z"/>
                    </svg>
                  </a>              
              
                  {/* LinkedIn */}
                  <a href="" className="text-gray-400 hover:text-white transition-colors">              
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
        0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
        1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
        4.267 5.455v6.286zM5.337 7.433c-1.144 
        0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
        2.063-2.063 1.14 0 2.064.925 
        2.064 2.063 0 1.139-.925 2.065-2.064 
        2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
        0H1.771C.792 0 0 .774 0 1.729v20.542C0 
        23.227.792 24 1.771 24h20.451C23.2 24 24 
        23.227 24 22.271V1.729C24 .774 23.2 
        0 22.222 0h.003z"/>
      </svg>
                  </a>
                </div>
              
                <p className="text-gray-400 text-sm">support@studyassist.ai</p>
            </div>
            <p className="text-gray-400 text-sm">support@studyassist.ai</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 StudyAssist. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center space-x-2 text-gray-400 text-sm">
              <Users className="h-4 w-4" />
              <span>50,000+ students</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-400 text-sm">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>4.9/5 rating</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};