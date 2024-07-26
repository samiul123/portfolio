import React from 'react';
import {educationBg, educationWebp} from '../assets';
import { educations } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css';
import {styles} from "../styles";
import Background from "./Background";

export const Education = (props) => {
    const images=[{
        type: "image/webp",
        srcSet: educationWebp,
        fallback: false
    }, {
        type: "image/jpeg",
        srcSet: educationBg,
        fallback: true
    }]

    return (
        <div
            id={props.id}
            key={props.id}
            className="uppercase relative p-10 h-auto bg-cover text-white flex flex-col items-center space-y-10"
        >
            <Background images={images}/>
            <h2 className={styles.pageTitle}>Education</h2>
            <div className="z-10 w-full">
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: '#333b50',
                                color: 'white',
                                boxShadow:
                                    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid #333b50',
                            }}
                            date={
                                <div>
                                    <h3 className="text-white text-[18px] font-bold">{education.date}</h3>
                                </div>
                            }
                            iconStyle={{ boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            icon={
                                <picture>
                                    {education.images.map((image, i) => (
                                        <>
                                            <source key={`${i}_${index}`} type={image.type} srcSet={image.srcSet}/>
                                            {image.fallback && <img src={image.srcSet} alt={education.institution}
                                                                    className="w-full h-full object-contain"/>}
                                        </>
                                    ))}
                                </picture>
                            }
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-bold">{education.institution}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-lg">{education.degree} in {education.major}</h4>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

