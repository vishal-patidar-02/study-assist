import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navigation: React.FC = () => {
    
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
  const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
            StudyAssist
          </span>
        </div>
        
        {/* Desktop menu*/}
        <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
        </div>
        
        {/* Mobile menu button */}
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10 z-50">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </nav>
  );
};