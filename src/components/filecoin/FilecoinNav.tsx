import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logo from '../../assets/logo.png';

export function FilecoinNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Filecoin Africa" className="logo" />
            {/* <span className="text-xl font-bold text-white">Filecoin<span className="text-green-400">.africa</span></span> */}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#events" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Events</a>
            <a href="#cities" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Cities</a>
            <a href="#community" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Community</a>
            <a href="#resources" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Resources</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
            <button className="text-slate-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#events" className="block text-slate-300 hover:text-white transition-colors text-sm font-medium">Events</a>
            <a href="#cities" className="block text-slate-300 hover:text-white transition-colors text-sm font-medium">Cities</a>
            <a href="#community" className="block text-slate-300 hover:text-white transition-colors text-sm font-medium">Community</a>
            <a href="#resources" className="block text-slate-300 hover:text-white transition-colors text-sm font-medium">Resources</a>
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
          </div>
        )}
      </div>
    </nav>
  );
}
