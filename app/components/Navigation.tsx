import { Brain } from 'lucide-react';

// Add GitHub's Mona Sans and Hubot Sans fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.head.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

export const Navigation: React.FC = () => {
  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Hubot Sans, sans-serif' }}>
            StudyAssist
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Reviews
          </a>
          <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
            Dashboard
          </a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};