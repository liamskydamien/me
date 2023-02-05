import Card from "../../UI/Card/Card";
import classes from "./ProjectItem.module.css";
const ProjectItem = props => {
    const onClick = () => {
        window.open(props.link, "_blank");
    }
    return <Card className={classes.card}>
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <div className={classes.content}>
            <p>{props.description}</p>
            <button onClick={onClick} className={classes.button}>To the project!</button>
        </div>
    </Card>
}
export default ProjectItem;