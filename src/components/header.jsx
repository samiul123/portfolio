import {logo} from '../assets'
import {navLinks} from "../constants";
import {useState} from "react";

function Header() {
    const [activeMenu, setActiveMenu] = useState('home')
    return (
        <header
            className="text-white p-4 flex justify-between items-center">
            <div
                className="ml-6 flex items-center"
                onClick={() => {
                    setActiveMenu('home');
                    window.scrollTo(0, 0);
                }}
            >
                <img src={logo} alt="Logo" className="h-10 mr-3"/>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {navLinks.map(nav =>
                        <li
                            key={nav.id}
                            className={`cursor-pointer ${activeMenu === nav.id ? 'text-custom-green' : 'text-white'} hover:text-custom-green`}
                            onClick={() => setActiveMenu(nav.id)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;