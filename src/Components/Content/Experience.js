import Card from "../../UI/Card/Card";
import ListofWork from "./ListofWork";
import ListOfEducation from "./ListOfEducation";
import styles from "./Experience.module.css";
import SelfEmployed from "../Selfemployed/SelfEmployed";

const Experience = props => {
    return <div className={styles.experiences}>
        <Card className={styles.ExperiencesHeader}>
            <h2>Experiences</h2>
        </Card>
        <Card className={styles.Work}>
            <ListofWork theme={props.theme}/>
        </Card>
        <Card className={styles.Education}>
            <ListOfEducation/>
        </Card>
        <SelfEmployed className={styles.SelfEmployment} theme={props.theme}/>
    </div>
}
export default Experience;