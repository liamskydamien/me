import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
import {FaArchive} from "react-icons/fa";
const Skills = () => {
    const skills = [
        {
            id: 1,
            title: "Design",
            icon: <FaArchive/>
        },
        {
            id: 2,
            title: "Languages",
            icon: <FaArchive/>,
        },
        {
            id: 3,
            title: "Hobbies",
            icon: <FaArchive/>
        },
        {
            id: 4,
            title: "Communication",
            icon: <FaArchive/>,
        },
        {
            id: 5,
            title: "Management",
            icon: <FaArchive/>,
        }
    ]
    return <div className={styles.layout}>
        <Card className={styles.header}>
            <h2>Skills</h2>
        </Card>
        <SkillCard items={skills}/>
        <Card className={styles.design}>
            <h3>Design</h3>
        </Card>
        <Card className={styles.languages}>
            <h3>Language</h3>
        </Card>
        <Card className={styles.hobbies}>
            <h3>Hobbies</h3>
        </Card>
        <Card className={styles.communication}>
            <h3>Communication</h3>
        </Card>
        <Card className={styles.management}>
            <h3>Management</h3>
        </Card>
    </div>
}
export default Skills;