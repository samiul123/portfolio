import {publicationBg, rightArrow, leftArrow, publicationWebp} from "../assets";
import React, { useState } from "react";
import { publications } from "../constants";
import {motion} from "framer-motion";
import {styles} from "../styles";
import Background from "./Background";

export const Publication = (props) => {
    const [showAbstract, setShowAbstract] = useState(false);

    const variants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            },
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            },
        }),
    };

    const images=[{
        type: "image/webp",
        srcSet: publicationWebp,
        fallback: false
    }, {
        type: "image/jpeg",
        srcSet: publicationBg,
        fallback: true
    }]

    return (
        <div
            id={props.id}
            key={props.id}
            className="relative p-10 h-auto bg-cover text-white flex flex-col items-center space-y-10 uppercase"
            style={{ backgroundImage: `url(${publicationBg})` }}
        >
            <Background images={images}/>
            <h2 className={styles.pageTitle}>Publication</h2>
            {publications.map((publication, index) => (
                <motion.div
                    key={index} className="w-full flex p-5 z-10 bg-custom-gray rounded-lg relative"
                    custom={-1}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                >
                        {showAbstract ? (
                            <div
                                className="flex items-center gap-5 w-full"
                            >
                                <button onClick={() => {
                                    setShowAbstract(false)
                                }}
                                        className="flex items-center justify-center w-6 h-6">
                                    <img src={leftArrow} alt="leftArrow" className="w-full h-full"/>
                                </button>
                                <div className="flex-col items-center text-sm w-full">
                                    <h3 className="text-lg font-bold">ABSTRACT</h3>
                                    <h4 className="text-sm">{publication.abstract}</h4>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex-col items-center w-full">
                                    <h3 className="text-lg font-bold">
                                        <a className="hover:text-custom-green"
                                           href={publication.url}>{publication.title}</a>
                                    </h3>
                                    <h4 className="text-sm">{publication.conference}</h4>
                                    <h4 className="text-sm">{publication.date}</h4>
                                </div>
                                <button onClick={() => {
                                    setShowAbstract(true)
                                }}
                                        className="flex items-center justify-center w-6 h-6">
                                    <img src={rightArrow} alt="rightArrow" className="w-full h-full"/>
                                </button>
                            </div>
                        )}
                </motion.div>
            ))}
        </div>
    );
};
