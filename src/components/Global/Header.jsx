import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" id="Header_2" className="flex items-center">
                        <img src={images[0]} alt="Logo" className="h-12 w-auto" />
                        <span className="text-2xl font-bold text-indigo-600 ml-2">FoodieHub</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <div id="Header_3" className="flex items-center space-x-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Menu', path: '/menupage' },
                                { name: 'Reservations', path: '/reservationpage' },
                                { name: 'Events', path: '/eventpage' },
                                { name: 'Delivery', path: '/deliverypage' }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${location.pathname === item.path ? 'text-indigo-600' : 'text-gray-700'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div id="Header_4" className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
                                />
                                <svg
                                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <Link
                                to="/loginpage"
                                className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
                            >
                                Login
                            </Link>
                            <Link
                                to="/registerpage"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    <button
                        id="Header_5"
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div id="Header_6" className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Menu', path: '/menupage' },
                                { name: 'Reservations', path: '/reservationpage' },
                                { name: 'Events', path: '/eventpage' },
                                { name: 'Delivery', path: '/deliverypage' },
                                { name: 'Login', path: '/loginpage' },
                                { name: 'Register', path: '/registerpage' }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${location.pathname === item.path ? 'text-indigo-600' : 'text-gray-700'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;