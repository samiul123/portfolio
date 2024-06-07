import { useState } from "react";
import {logo, menu, close} from "../assets";
import { navLinks } from "../constants";
import {motion} from "framer-motion";
import {slideIn} from "../utils/motion";

function Header() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex justify-between items-center w-full">
            <div
                className="cursor-pointer"
                onClick={() => {
                    setActiveMenu('home');
                    window.scrollTo(0, 0);
                }}
            >
                <img src={logo} alt="Logo" className="h-10"/>
            </div>
            <div className="fixed top-4 right-4 z-50 lg:hidden flex items-center">
                <motion.button
                    animate={{rotate: menuOpen ? 360 : 0}}
                    transition={{duration: 0.5}}
                    onClick={handleMenuToggle} className="text-white">
                    <img src={menuOpen ? close : menu} alt="menu" className="w-7 h-7"/>
                </motion.button>
            </div>
            {
                window.innerWidth >= 1024 ? (
                    <nav className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:items-center fixed lg:relative 
                top-0 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 
                z-40 lg:z-auto`}>
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-1">
                            {navLinks.map(nav => (
                                <li
                                    key={nav.id}
                                    className={`cursor-pointer ${activeMenu === nav.id ? 'text-custom-green' : 'text-white'} 
                            hover:text-custom-green transition-colors duration-300`}
                                    onClick={() => {
                                        setActiveMenu(nav.id);
                                        setMenuOpen(false); // Close menu on link click
                                    }}
                                >
                                    <a href={`#${nav.id}`} className="block lg:inline-block p-2">{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ) : (
                    <motion.nav
                        initial={{x: '100%'}}
                        animate={{x: menuOpen ? '0%' : '100%'}}
                        transition={{type: 'spring', stiffness: 300, damping: 30}}
                        className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:items-center fixed 
                        lg:relative top-0 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-gray-800 lg:bg-transparent 
                        p-4 lg:p-0 z-40 lg:z-auto`}>
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-1">
                            {navLinks.map(nav => (
                                <li
                                    key={nav.id}
                                    className={`cursor-pointer ${activeMenu === nav.id ? 'text-custom-green' : 'text-white'} 
                            hover:text-custom-green transition-colors duration-300`}
                                    onClick={() => {
                                        setActiveMenu(nav.id);
                                        setMenuOpen(false); // Close menu on link click
                                    }}
                                >
                                    <a href={`#${nav.id}`} className="block lg:inline-block p-2">{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )
            }

        </header>
    );
}

export default Header;