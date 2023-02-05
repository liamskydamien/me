import Card from "../../UI/Card/Card";
import ProjectsCarousel from "./ProjectsCarousel";
import React from "react";
import classes from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={classes.layout}>
            <Card className={classes.header}>
                <h2>Projects</h2>
            </Card>
            <ProjectsCarousel className={classes.content}/>
        </div>
    );
}

export default Projects;