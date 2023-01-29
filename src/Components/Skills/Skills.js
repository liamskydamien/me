import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
import {FaCode, FaCss3, FaCss3Alt, FaHtml5, FaJava, FaJs, FaReact} from "react-icons/fa";
import Skill from "./Skill";
const Skills = () => {
    const card = styles.card;
    return <div className={styles.layout}>
        <Card className={styles.header}>
            <h2>Skills</h2>
        </Card>
        <Card className={styles.programming}>
            <h3>Programming</h3>
            <div className={styles.content}>
                <Skill color={'green'} icon={<FaJs size={20}/>} title={"JavaScript"}/>
                <Skill color={'orange'} icon={<FaJava size={20}/>} title={"Java"}/>
                <Skill color={'blue'} icon={<FaReact size={20}/>} title={"React"}/>
                <Skill color={'purple'} icon={<FaCss3Alt size={20}/>} title={"CSS"}/>
                <Skill color={'dark'} icon={<FaHtml5 size={20}/>} title={"HTML"}/>

            </div>
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