import {WebsiteLogo} from "./WebsiteLogo";

export const Footer = () => {
    return (
        <footer className="bg-custom-gray p-5 text-white flex justify-between items-center">
            <div className="flex items-center">
                {/*TODO: Add the option to call setActiveMenu in header. Need to move the state from header to App.js*/}
                <WebsiteLogo className="h-10 mr-3"/>
            </div>
        </footer>
    )
}