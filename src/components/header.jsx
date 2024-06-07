import {useEffect, useState} from "react";
import {logo, menu, close} from "../assets";
import { navLinks } from "../constants";
import {motion} from "framer-motion";

function Header() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
            document.body.classList.add('blur-background');
        } else {
            document.body.classList.remove('no-scroll');
            document.body.classList.remove('blur-background');
        }

        return () => {
            document.body.classList.remove('no-scroll');
            document.body.classList.remove('blur-background');
        };
    }, [menuOpen]);

    return (
        <header className="flex justify-between items-center w-full">
            <img src={logo} alt="Logo" className="h-10 cursor-pointer" onClick={() => {
                setActiveMenu('home');
                window.scrollTo(0, 0);
            }}/>

            <div className="fixed top-6 right-5 z-50 lg:hidden flex items-center">
                <motion.button
                    animate={{rotate: menuOpen ? 360 : 0}}
                    transition={{duration: 0.5}}
                    onClick={handleMenuToggle} className="text-white">
                    <img src={menuOpen ? close : menu} alt="menu" className="w-7 h-7"/>
                </motion.button>
            </div>
            {
                window.innerWidth >= 1024 && (
                    <nav className={`top-auto left-auto w-auto bg-transparent p-0 z-auto`}>
                        <ul className="flex flex-row items-center space-y-0 space-x-1">
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
                )
            }
            {
                window.innerWidth < 1024 && (
                    <motion.nav
                        initial={{x: '100%'}}
                        animate={{x: menuOpen ? '0%' : '100%'}}
                        transition={{type: 'spring', stiffness: 300, damping: 30}}
                        className={`${menuOpen ? "flex" : "hidden"} flex-col fixed top-0 left-0 w-full bg-gray-800 p-4 z-40`}>
                        <ul className="flex flex-col space-y-4">
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