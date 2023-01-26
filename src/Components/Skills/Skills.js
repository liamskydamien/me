import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
const Skills = () => {
    const card = styles.card;
    return <div className={styles.layout}>
        <Card className={styles.header}>
            <h2>Skills</h2>
        </Card>
        <Card className={styles.programming}>
            <h3>Programming</h3>
        </Card>
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