import {skills} from "../assets";

const Skills = (props) => {
    return (
        <div id={props.id}
             key={props.id}
             className="p-10 h-screen bg-cover text-white flex justify-center"
             style={{backgroundImage: `url(${skills})`}}>
            <h3 className="font-lulo text-4xl">SKILLS</h3>
        </div>
    )
}

export default Skills;