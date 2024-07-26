import {download, experienceBg, experienceWebp, resume, resumeWebp} from "../assets";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {experiences} from "../constants";
import React, {Fragment} from "react";
import {styles} from "../styles";
import Background from "./Background";

export const Experience = (props) => {
    const images=[{
        type: "image/webp",
        srcSet: experienceWebp,
        fallback: false
    }, {
        type: "image/jpeg",
        srcSet: experienceBg,
        fallback: true
    }]

    return (
        <div
            id={props.id}
            key={props.id}
            className="relative p-10 h-auto bg-cover text-white flex flex-col items-center space-y-10 uppercase"
        >
            <Background images={images} />
            <h2 className={styles.pageTitle}>Experience</h2>
            <div className="z-10 w-full">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
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
                                    <h3 className="text-white text-[18px] font-bold">{experience.date}</h3>
                                </div>
                            }
                            iconStyle={{
                                boxShadow: 'none',
                                background: '#333b50',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            icon={
                                <picture>
                                    {experience.images.map((image, i) => (
                                        <Fragment key={`${i}_${index}`}>
                                            <source type={image.type} srcSet={image.srcSet}/>
                                            {image.fallback && <img src={image.srcSet} alt={experience.company}
                                                                    className="w-20 h-10 object-contain"/>}
                                        </Fragment>
                                    ))}
                                </picture>
                            }
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.company}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-lg">{experience.title}</h4>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        contentStyle={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#333b50',
                            color: 'white',
                            boxShadow:
                                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid #333b50',
                        }}
                        iconStyle={{
                            boxShadow: 'none',
                            background: '#333b50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        icon={
                            <picture>
                                <source type="image/webp" srcSet={resumeWebp}/>
                                <source type="image/png" srcSet={resume}/>
                                <img
                                    src={resume}
                                    alt="resume"
                                    className="w-20 h-10 object-contain"
                                />
                            </picture>
                        }
                    >
                        <button
                            className="flex items-center justify-center gap-4 p-2"
                            onClick={() => {
                                window.open("/resume.html");
                            }}
                        >
                            <h4 className="vertical-timeline-element-title text-lg">MY RESUME</h4>
                            <img
                                src={download}
                                alt="download"
                                className="w-6 h-6 object-contain"
                            />
                        </button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}