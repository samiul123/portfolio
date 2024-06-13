import {projectBg, github, show, hide} from "../assets"; // Ensure you import other assets as needed
import { styles } from "../styles";
import {projects, skillGroups} from "../constants";
import {useEffect, useState} from "react";
import {chunkArray} from "../utils/helpers";
import {Slide} from "react-slideshow-image";

export const Project = (props) => {
    const [chunkedProjects, setChunkedProjects] = useState([]);
    const [chunkSize, setChunkSize] = useState(0);

    const handleResize = () => {
        let chunkSize = 1;
        if (window.innerWidth >= 1024) chunkSize = 3;
        setChunkSize(chunkSize);
        setChunkedProjects(chunkArray(projects, chunkSize));
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id={props.id}
             key={props.id}
             className="relative p-10 h-auto bg-cover text-white flex flex-col items-center justify-center space-y-10"
             style={{backgroundImage: `url(${projectBg})`}}>
            <div className="absolute inset-0 bg-custom-gray opacity-80 z-0"></div>
            <h2 className={styles.pageTitle}>PROJECTS</h2>
            <div className="relative z-10 w-screen flex-1">
                <Slide arrows={false}
                       indicators={chunkSize < projects.length}
                       autoplay={chunkSize < projects.length}
                       canSwipe={chunkSize < projects.length}
                >
                    {
                        chunkedProjects.map((group, groupIndex) => (
                            <div key={groupIndex} className="flex flex-wrap w-full mx-auto items-center justify-center gap-5">
                                {group.map((item, index) => (
                                    <div key={index}
                                         className="bg-custom-gray opacity-80 rounded-lg flex flex-col items-start justify-start
                                         p-5 w-full max-w-lg min-h-[250px] relative">
                                        <div className="flex items-center justify-between w-full">
                                            <h1 className="text-3xl">{item.title}</h1>
                                            <a href={item.githubUrl} className="w-8 h-8">
                                                <img src={github} alt={item.title} className="w-full"/>
                                            </a>
                                        </div>
                                        <h3 className="text-xl mt-2">{item.description}</h3>
                                        <div className={`mt-auto shadow-xl rounded-lg flex ${item.demoUrl ? 
                                            'bg-custom-green-v2': 'bg-red-600'} p-2`}>
                                            <a href={item.demoUrl}
                                               className={`mt-auto flex items-center justify-center 
                                                rounded-lg self-end gap-1 ${!item.demoUrl ? 'pointer-events-none' : ''}`}>
                                                DEMO
                                                <img src={item.demoUrl ? show : hide} alt="show" className="w-5 h-5"/>
                                            </a>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </Slide>
            </div>
            {/*<div className="flex items-center justify-center gap-4 z-10 relative">*/}
            {/*    {*/}
            {/*        projects.map((project, index) => (*/}
            {/*            <div key={index}*/}
            {/*                 className="bg-custom-gray opacity-80 rounded-lg flex flex-col items-start justify-between*/}
            {/*                 p-5 w-full max-w-lg min-h-[250px]">*/}
            {/*                <div className="flex items-center justify-between w-full">*/}
            {/*                    <h1 className="text-3xl">{project.title}</h1>*/}
            {/*                    <a href={project.githubUrl} className="w-8">*/}
            {/*                        <img src={github} alt={project.title} className="w-full"/>*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <h3 className="text-xl mt-2">{project.description}</h3>*/}
            {/*                <button className="mt-5 shadow-xl rounded-lg">DEMO</button>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}
