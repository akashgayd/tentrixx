import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../imeges/navlogo1.png';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // Simplified dropdown state
    const [hoverDropdown, setHoverDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileDropdown = (itemName) => {
        setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
    };

    const menuItems = [
        {
            name: 'About Us',
            hasDropdown: true,
            link: '/about',
            dropdownItems: [
                { name: 'Artech Advantage', link: '/about/artech-advantage' },
                { name: 'Great Place to Work', link: '/about/great-place-to-work' },
                { name: 'Awards', link: '/about/awards' },
                { name: 'Certifications and Accolades', link: '/about/certifications' }
            ]
        },
        {
            name: 'Our Solutions',
            hasDropdown: true,
            link: '/our-solutions',
            dropdownItems: [
                { name: 'Solution 1', link: '/our-solutions/solution-1' },
                { name: 'Solution 2', link: '/our-solutions/solution-2' },
                { name: 'Solution 3', link: '/our-solutions/solution-3' }
            ]
        },
        {
            name: 'Careers',
            hasDropdown: true,
            link: '/career',
            dropdownItems: [
                { name: 'Open Positions', link: '/career/open-positions' },
                { name: 'Career Growth', link: '/career/growth' },
                { name: 'Benefits', link: '/career/benefits' }
            ]
        },
        { name: 'Community First Initiatives', hasDropdown: false, link: '/community' },
        {
            name: 'Resources',
            hasDropdown: true,
            link: '/resources',
            dropdownItems: [
                { name: 'Blog', link: '/resources/blog' },
                { name: 'Case Studies', link: '/resources/case-studies' },
                { name: 'Whitepapers', link: '/resources/whitepapers' }
            ]
        },
        { name: 'Contact Us', hasDropdown: false, link: '/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    const headerClasses = clsx(
        "fixed top-0 left-0 w-full bg-white shadow-sm z-40 transition-padding duration-300",
        {
            "py-3": !isScrolled,
            "py-2": isScrolled,
        }
    );

    const navLinkClasses = (link) => clsx(
        "px-3 py-2 text-sm lg:text-xs xl:text-base rounded-full transition-colors duration-200",
        {
            'bg-[#293b95] text-white': isActive(link),
            'text-gray-700 hover:bg-[#293b95] hover:text-white': !isActive(link)
        }
    );

    return (
        <>
            <header className={headerClasses} ref={navbarRef}>
                <div className="px-4 py-2 flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="sm:w-1/2">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="ARTECH Intelligence is Human"
                                className={clsx("transition-height duration-300", {
                                    "h-12 w-36 sm:h-16 sm:w-52": !isScrolled,
                                    "h-8 w-24 sm:h-12 sm:w-36": isScrolled,
                                })}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-0">
                        <Link to="/" className={navLinkClasses('/')}>
                            Home
                        </Link>
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setHoverDropdown(item.name)}
                                onMouseLeave={() => setHoverDropdown(null)}
                            >
                                <Link
                                    to={item.link}
                                    className={clsx(
                                        "px-2 lg:px-2 py-2 text-sm lg:text-xs xl:text-sm rounded-full flex items-center transition-colors duration-200",
                                        {
                                            'bg-[#293b95] text-white': isActive(item.link),
                                            'text-gray-700 hover:bg-[#293b95] hover:text-white': !isActive(item.link)
                                        }
                                    )}
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                                </Link>

                                {/* Desktop Dropdown Menu */}
                                {item.hasDropdown && hoverDropdown === item.name && (
                                    <div className="absolute left-0 mt-2 w-60 lg:w-56 xl:w-56 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50 border border-gray-200">
                                        {item.dropdownItems.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                to={dropdownItem.link}
                                                className="block px-4 py-2 lg:py-2 text-xs lg:text-sm text-white hover:bg-[#293b95] hover:text-white border-b border-gray-100 last:border-b-0"
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="hidden xl:flex items-center space-x-4 2xl:flex">
                        <div className="flex space-x-3">
                            <Link to="/search" className="text-[#293b95] hover:text-opacity-80 transition-opacity">
                                <Search className="w-5 h-5" />
                            </Link>
                            <Link to="/linkedin" className="text-[#293b95] hover:text-opacity-80 transition-opacity">
                                <FaLinkedin className="w-5 h-5" />
                            </Link>
                            <Link to="/facebook" className="text-[#293b95] hover:text-opacity-80 transition-opacity">
                                <FaFacebook className="w-5 h-5" />
                            </Link>
                            <Link to="/twitter" className="text-[#293b95] hover:text-opacity-80 transition-opacity">
                                <FaTwitter className="w-5 h-5" />
                            </Link>
                            <Link to="/instagram" className="text-[#293b95] hover:text-opacity-80 transition-opacity">
                                <FaInstagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile/Tablet Menu Button */}
                    <div className="flex items-center lg:hidden w-1/2 justify-end">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-black focus:outline-none z-50"
                            aria-label="Toggle Menu"
                        >
                            <Menu size={29} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile/Tablet Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                    onClick={toggleMobileMenu}
                    aria-hidden="true"
                ></div>
            )}

            {/* Sliding Mobile/Tablet Menu Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 bg-[#222222] text-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:w-1/2 w-full`}
            >
                {/* Search and Close Button */}
                <div className="flex bg-black justify-between items-center p-4 border-b border-[#333333]">
                    <input type='text' placeholder='Search' className="bg-black text-gray-400 text-md font-semibold w-full h-full focus:outline-none" />
                    <button className="text-white" onClick={toggleMobileMenu} aria-label="Close Menu">
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 overflow-y-auto">
                    <div className="flex flex-col">
                        <Link
                            to="/"
                            className={clsx(
                                "px-6 py-3 border-b border-[#333333]",
                                {
                                    'bg-[#293b95]': isActive('/'),
                                    'hover:bg-[#293b95]': !isActive('/')
                                }
                            )}
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>

                        {menuItems.map((item) => (
                            <div key={item.name} className="border-b border-[#333333]">
                                {item.hasDropdown ? (
                                    <div
                                        className={clsx(
                                            "px-6 py-3 flex justify-between items-center cursor-pointer",
                                            {
                                                'bg-[#293b95]': isActive(item.link),
                                                'hover:bg-[#293b95]': !isActive(item.link)
                                            }
                                        )}
                                        onClick={() => toggleMobileDropdown(item.name)}
                                        aria-expanded={openMobileDropdown === item.name}
                                        role="button"
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown
                                            size={24}
                                            className={clsx("transition-transform duration-300", {
                                                'rotate-180': openMobileDropdown === item.name
                                            })}
                                        />
                                    </div>
                                ) : (
                                    <Link
                                        to={item.link}
                                        className={clsx(
                                            "px-6 py-4 block",
                                            {
                                                'bg-[#293b95]': isActive(item.link),
                                                'hover:bg-[#293b95]': !isActive(item.link)
                                            }
                                        )}
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {item.hasDropdown && openMobileDropdown === item.name && (
                                    <div className="bg-[#333333] px-6 py-3">
                                        <ul className="space-y-2">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <li key={dropdownItem.name}>
                                                    <Link
                                                        to={dropdownItem.link}
                                                        className="text-gray-300 hover:text-white hover:bg-[#293b95] block py-1 px-2 rounded"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
            <div style={{ paddingTop: navbarRef.current ? navbarRef.current.offsetHeight : '80px' }}>
                {/* Your page content here */}
            </div>
        </>
    );
};

export default Navbar;
