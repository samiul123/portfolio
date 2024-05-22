import {skillsBg} from "../assets";
import {skillGroups} from "../constants";

const Skills = (props) => {
    return (
        <div id={props.id}
             key={props.id}
             className="relative p-10 h-screen bg-cover text-white flex flex-col items-center space-y-10"
             style={{backgroundImage: `url(${skillsBg})`}}>
            <div className="absolute inset-0 bg-custom-gray opacity-80 z-0"></div>
            <h2 className="font-lulo text-4xl z-10">SKILLS</h2>
            <div className="flex justify-center space-x-10">
                {skillGroups.map((group, i) => {
                    return (
                        <div key={i}
                             className="p-5 group relative overflow-hidden transition duration-300 ease-in-out transform
                             hover:translate-y-1">
                            <h4 className="mb-10 text-center">{group.title}</h4>
                            <div className="grid grid-cols-3 gap-4">
                                {group.items.map((item, i) => (
                                    <img key={i} src={item.logo} alt="logo" className="w-12 h-auto"/>
                                ))}
                            </div>
                            <div
                                className="rounded-3xl absolute inset-0 group-hover:opacity-10 group-hover:bg-gray-400
                                duration-300 ease-in-out"></div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Skills;