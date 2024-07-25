import {skillsBg} from "../assets";
import {skillGroups} from "../constants";
import {motion, AnimatePresence, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {styles} from "../styles";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {chunkArray} from "../utils/helpers";

const SkillGroup = (props) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const groupRef = useRef(null);
    const inView = useInView(groupRef, {once: false, amount: .5})


    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    useEffect(() => {
        if (inView) {
            setHoveredItem(null);
        }
    }, [inView, props.group.title]);

    useEffect(() => {
        return () => setHoveredItem(null);
    }, []);

    return (
        <motion.div
            ref={groupRef}
            key={props.index}
            className="mx-auto flex-1 p-4 relative overflow-hidden transition duration-300 ease-in-out transform"
            onMouseEnter={() => props.handleGroupMouseEnter(props.group)}
            onMouseLeave={props.handleGroupMouseLeave}
            initial={{opacity: 0}}
            animate={{opacity: props.isInView ? 1 : 0}}
            transition={{duration: 0.5, delay: props.index * 0.2}}>
            <h4 className="mb-2 text-center">{props.group.title}</h4>
            <motion.div
                className="h-0.5 bg-white mb-5 mx-auto"
                initial={{width: '20%'}}
                animate={{width: props.isGroupHovered ? '70%' : '20%'}}
                transition={{duration: 0.3}}
            />
            <div className="grid grid-cols-3 gap-4">
                {props.group.items.map((item, i) => (
                    <motion.img
                        key={i}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                        src={item.logo}
                        alt="logo"
                        className="w-12 h-auto mx-auto"
                        whileHover={{scale: 1.25}}
                        transition={{duration: 0.3}}
                    />
                ))}
            </div>
            {/*<div className="flex items-center justify-center mt-5 z-20">{hoveredItem?.name}</div>*/}
        </motion.div>
    )
}

const Skills = (props) => {
    const [hoveredGroup, setHoveredGroup] = useState(null);
    const [chunkedSkillGroups, setChunkedSkillGroups] = useState([]);
    const [chunkSize, setChunkSize] = useState(0);

    const handleGroupMouseEnter = (group) => {
        setHoveredGroup(group);
    };

    const handleGroupMouseLeave = () => {
        setHoveredGroup(null);
    };

    const handleResize = () => {
        let chunkSize = 1;
        if (window.innerWidth >= 1024) chunkSize = 4;
        else if (window.innerWidth >= 640 && window.innerWidth < 1024) chunkSize = 2;
        setChunkSize(chunkSize);
        setChunkedSkillGroups(chunkArray(skillGroups, chunkSize));
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const skillRef = useRef(null);
    const isInView = useInView(skillRef, {amount: .25});

    return (
        <div id={props.id}
             key={props.id}
             ref={skillRef}
             className="relative p-10 h-auto bg-cover text-white flex flex-col items-center justify-center space-y-10"
             style={{backgroundImage: `url(${skillsBg})`}}>
            <div className="absolute inset-0 bg-custom-gray opacity-80 z-0"></div>
            <h2 className={styles.pageTitle}>SKILLS</h2>
            <div className="relative z-10 w-screen">
                <Slide arrows={false}
                       indicators={chunkSize < skillGroups.length}
                       autoplay={chunkSize < skillGroups.length}
                       canSwipe={chunkSize < skillGroups.length}
                >
                    {
                        chunkedSkillGroups.map((pair, pairIndex) => (
                            <div key={pairIndex} className="flex flex-wrap w-full">
                                {pair.map((group, index) => (
                                    <SkillGroup key={index}
                                                index={index}
                                                group={group}
                                                isInView={isInView}
                                                handleGroupMouseEnter={handleGroupMouseEnter}
                                                handleGroupMouseLeave={handleGroupMouseLeave}
                                                isGroupHovered={hoveredGroup === group}
                                    />
                                ))}
                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    )
}

export default Skills;