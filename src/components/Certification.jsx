import {certificationBg} from "../assets";
import React from "react";
import {certifications} from "../constants";
import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";
import {styles} from "../styles";

export const Certification = (props) => {
    return (
        <div
            id={props.id}
            key={props.id}
            className="uppercase relative p-10 h-auto bg-cover text-white flex flex-col items-center space-y-10"
            style={{ backgroundImage: `url(${certificationBg})` }}
        >
            <div className="absolute inset-0 bg-custom-gray opacity-80 z-0"></div>
            <h2 className={styles.pageTitle}>Certifications</h2>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="m-auto flex lg:flex-row md:flex-row flex-col gap-5">
            {
                certifications.map((certification, index) => (
                    <motion.div
                        className="flex-1 rounded-lg items-center z-10"
                        whileHover={{scale: 1.1}}
                        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
                            <a className="hover:cursor-pointer"
                               onClick={() => window.open(certification.credentialUrl)}>
                                <img
                                    src={certification.image}
                                    alt={certification.issuer}
                                    className="w-full h-full rounded-lg"/>
                            </a>
                    </motion.div>
                ))
            }
            </motion.div>
        </div>
    )
}