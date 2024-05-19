import {logo} from '../../assets'
import {navLinks} from "../../constants";

function Header() {
    return (
        <header className="text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 mr-3"/>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {navLinks.map(nav =>
                        <li><a href={`#${nav.id}`}>{nav.title}</a></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;