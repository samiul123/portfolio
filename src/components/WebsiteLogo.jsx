import {logo, logowebp} from "../assets";

export const WebsiteLogo = ({className, onClick}) => {
    return (
        <picture>
            <source type="image/webp" srcSet={logowebp}/>
            <source type="image/png" srcSet={logo}/>
            <img src={logo} alt="Logo" className={className} onClick={onClick}/>
        </picture>
    )
}