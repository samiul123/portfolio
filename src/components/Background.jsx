import React, { Fragment } from "react";

const Background = ({ images, showGrayBackground= true }) => {
    return (
        <picture className="absolute inset-0 w-full h-full z-0">
            {images.map((image, index) => (
                <Fragment key={index}>
                    <source type={image.type} srcSet={image.srcSet}/>
                    {image.fallback &&
                        <img src={image.srcSet} alt="" className="w-full h-full object-cover"/>}
                </Fragment>
            ))}
            { !!showGrayBackground && <div className="absolute inset-0 bg-custom-gray opacity-80 h-full"></div>}
        </picture>
    );
};

export default Background;
