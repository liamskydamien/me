import Card from "../../UI/Card/Card";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectsCarousel.module.css";
import IWJunior from "../../Pictures/IWJunior.png";
import BJS from "../../Pictures/BJS.png";
import ReactLogo from "../../Pictures/React.png";
const ProjectsCarousel = () =>{

    return <Card className={classes.background}>
        <div className={classes.slider}>
            <ProjectItem img={IWJunior}
                         title={"App Design IW-Junior"}
                         description={"During a project at the university, " +
                             "I worked together with other students on creating innovative ideas to make the IW-Junior student cup better. My main task was to create a App which is an interactive component in the cup."}
                         link={"https://www.figma.com/file/6iTPYaq6zxYW7HCb6fnVI2/DesignThinking?node-id=0%3A1&t=aQAJTjsYyXfNWker-1"}/>
            <ProjectItem img={BJS}
                         title={"API and Web App for BJS"}
                         description={"As my final project at my school, I created with 2 other students a Full-Stack Web App for the BJS." +
                             "The BJS App is for managing Sportresults made during the Bundesjugendspiele (BJS). With the App you can create, edit and delete Sportresults. Aswell as calculating the pints for each student."}
                         link={"https://github.com/bjs-org"}/>
            <ProjectItem img={ReactLogo}
                         title={"This Website"}
                         description={"This Website is my first bigger React Project. I created it to showcase my CV and projects. More projects will be added in the future."}
                         link={"https://liamskydamien.github.io/me/"}/>
        </div>
    </Card>;

}

export default ProjectsCarousel;