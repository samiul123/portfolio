import {logo} from "../assets";

export const Footer = () => {
    return (
        <footer className="bg-custom-gray p-5 text-white flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 mr-3"/>
            </div>
        </footer>
    )
}