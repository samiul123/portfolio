import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

function Header() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="text-white flex justify-between items-center">
            <div
                className="cursor-pointer"
                onClick={() => {
                    setActiveMenu('home');
                    window.scrollTo(0, 0);
                }}
            >
                <img src={logo} alt="Logo" className="h-10"/>
            </div>
            <div className="lg:hidden flex items-center">
                <button onClick={handleMenuToggle} className="text-white">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <nav
                className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:items-center absolute lg:static 
                top-16 left-1/2 w-1/2 lg:w-auto bg-custom-gray bg-opacity-80 lg:bg-transparent p-4 lg:p-0`}>
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    {navLinks.map(nav => (
                        <li
                            key={nav.id}
                            className={`cursor-pointer ${activeMenu === nav.id ? 'text-custom-green' : 'text-white'} hover:text-custom-green`}
                            onClick={() => {
                                setActiveMenu(nav.id);
                                setMenuOpen(false); // Close menu on link click
                            }}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
