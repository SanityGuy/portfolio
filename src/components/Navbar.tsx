import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#1E1E1E]/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">My Portfolio</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1E1E1E] py-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-[#E0E0E0] hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </>
  );
}