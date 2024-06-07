import React from 'react';
import { educationBg } from '../assets';
import { educations } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css';
import {styles} from "../styles";

export const Education = (props) => {
    return (
        <div
            id={props.id}
            key={props.id}
            className="uppercase relative p-10 h-auto bg-cover text-white flex flex-col items-center space-y-10"
            style={{ backgroundImage: `url(${educationBg})` }}
        >
            <div className="absolute inset-0 bg-custom-gray opacity-80 z-0"></div>
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
                            iconStyle={{ boxShadow: 'none', background: '#333b50', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            icon={
                                <img
                                    src={education.logo}
                                    alt={education.institution}
                                    className="w-10 h-10 object-contain"
                                />
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

