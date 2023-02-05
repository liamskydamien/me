import Card from "../../UI/Card/Card";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectsCarousel.module.css";
import IWJunior from "../../Pictures/IWJunior.png";
import BJS from "../../Pictures/BJS.png";
const ProjectsCarousel = () =>{

    return <Card className={classes.background}>
        <div className={classes.slider}>
            <ProjectItem img={IWJunior}
                         title={"App Design IW-Junior"}
                         description={"During a project at the university, " +
                             "I worked together with other students on creating innovative ideas to make the IW-Junior student cup better. My main task was to create a App which is an interactive component in the cup."}
                         link={"https://www.figma.com/file/6iTPYaq6zxYW7HCb6fnVI2/DesignThinking?node-id=0%3A1&t=aQAJTjsYyXfNWker-1"}/>
            <ProjectItem img={IWJunior}
                         title={"App Design IW-Junior"}
                         description={"During a project at the university, " +
                             "I worked together with other students on creating innovative ideas to make the IW-Junior student cup better. My main task was to create a App which is an interactive component in the cup."}
                         link={"https://www.figma.com/file/6iTPYaq6zxYW7HCb6fnVI2/DesignThinking?node-id=0%3A1&t=aQAJTjsYyXfNWker-1"}/>
            <ProjectItem img={IWJunior}
                         title={"App Design IW-Junior"}
                         description={"During a project at the university, " +
                             "I worked together with other students on creating innovative ideas to make the IW-Junior student cup better. My main task was to create a App which is an interactive component in the cup."}
                         link={"https://www.figma.com/file/6iTPYaq6zxYW7HCb6fnVI2/DesignThinking?node-id=0%3A1&t=aQAJTjsYyXfNWker-1"}/>
        </div>
    </Card>;

}

export default ProjectsCarousel;