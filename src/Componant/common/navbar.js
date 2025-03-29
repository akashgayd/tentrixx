import React, { useState } from 'react';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImg from '../../imeges/navlogo1.png'

const ArtechNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { 
      label: 'About Us', 
      dropdownItems: ['Artech Advantage', 'Great Place to Work', 'Awards', 'Certifications and Accolades'] 
    },
    { 
      label: 'Our Solutions', 
      dropdownItems: ['Solution 1', 'Solution 2', 'Solution 3'] 
    },
    { 
      label: 'Careers', 
      dropdownItems: ['Open Positions', 'Career Growth', 'Culture'] 
    },
    { 
      label: 'Community First Initiatives', 
      dropdownItems: ['Initiative 1', 'Initiative 2', 'Initiative 3'] 
    },
    { 
      label: 'Resources', 
      dropdownItems: ['Whitepapers', 'Blog', 'Case Studies'] 
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-8" 
                src={LogoImg}
                alt="Artech Logo" 
              />
            
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-800 text-sm">Home</a>
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-700 hover:text-blue-800 flex items-center text-sm">
                    {item.label}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.dropdownItems.map((dropItem) => (
                          <a 
                            key={dropItem}
                            href="#" 
                            className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a href="#" className="text-gray-700 hover:text-blue-800 text-sm">Contact Us</a>
            </div>
            <button onClick={toggleSearch} className="ml-4">
              <Search className="h-4 w-4 text-gray-700" />
            </button>
          </div>

          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white w-11/12 max-w-md rounded-lg shadow-xl p-6">
                <div className="flex items-center border-b pb-2">
                  <Search className="h-5 w-5 text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full text-sm focus:outline-none"
                  />
                  <button onClick={toggleSearch}>
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 text-sm">Home</a>
              {navItems.map((item) => (
                <div key={item.label}>
                  <button 
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full text-left flex justify-between items-center text-gray-700 hover:bg-gray-50 px-3 py-2 text-sm"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4">
                      {item.dropdownItems.map((dropItem) => (
                        <a 
                          key={dropItem}
                          href="#" 
                          className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="#" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 text-sm">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ArtechNavbar;