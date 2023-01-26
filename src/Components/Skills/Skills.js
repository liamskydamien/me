import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
import {FaArchive} from "react-icons/fa";
const Skills = () => {
    return <div className={styles.layout}>
        <Card className={styles.header}>
            <h2>Skills</h2>
        </Card>
        <div className={styles.design}>
            <h3>Design</h3>
        </div>
        <div className={styles.languages}>
            <h3>Language</h3>
        </div>
        <div className={styles.hobbies}>
            <h3>Hobbies</h3>
        </div>
        <div className={styles.communication}>
            <h3>Communication</h3>
        </div>
        <div className={styles.management}>
            <h3>Management</h3>
        </div>
    </div>
}
export default Skills;