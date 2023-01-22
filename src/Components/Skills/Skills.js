import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
const Skills = () => {
    return <div>
        <Card className={styles.header}/>
        <Card className={styles.programming}/>
        <Card className={styles.design}/>
        <Card className={styles.languages}/>
        <Card className={styles.hobbies}/>
        <Card className={styles.communication}/>
        <Card className={styles.management}/>
    </div>
}
export default Skills;