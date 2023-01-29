import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
import {FaCode, FaCss3, FaCss3Alt, FaFigma, FaFlag, FaHtml5, FaJava, FaJs, FaReact} from "react-icons/fa";
import Skill from "./Skill";
import {SiAdobexd, SiAdobephotoshop, SiWordpress} from "react-icons/si";
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
            <div className={styles.content}>
                <Skill color={'purple'} icon={<FaFigma size={20}/>} title={"Figma"}/>
                <Skill color={'orange'} icon={<SiAdobexd size={20}/>} title={"Adobe XD"}/>
                <Skill color={'darkblue'} icon={<SiAdobephotoshop size={20}/>} title={"Photoshop"}/>
                <Skill color={'blue'} icon={<SiWordpress size={20}/>} title={"WordPress"}/>
            </div>
        </Card>
        <Card className={styles.languages}>
            <h3>Languages</h3>
            <div className={styles.list}>
                <Skill color={'blue'} icon={<FaFlag size={20}/>} title={"German - Native Speaker"}/>
                <Skill color={'green'} icon={<FaJs size={20}/>} title={"English - Fluent"}/>
            </div>
        </Card>
        <Card className={styles.hobbies}>
            <h3>Hobbies</h3>
            <div className={styles.list}>
                <Skill color={'blue'} icon={<FaFlag size={20}/>} title={"German - Native Speaker"}/>
                <Skill color={'green'} icon={<FaJs size={20}/>} title={"English - Fluent"}/>
            </div>
        </Card>
        <Card className={styles.communication}>
            <h3>Office</h3>
            <div className={styles.list}>
                <Skill color={'blue'} icon={<FaFlag size={20}/>} title={"German - Native Speaker"}/>
                <Skill color={'green'} icon={<FaJs size={20}/>} title={"English - Fluent"}/>
            </div>
        </Card>
        <Card className={styles.management}>
            <h3>Soft-Skills</h3>
            <div className={styles.list}>
                <Skill color={'blue'} icon={<FaFlag size={20}/>} title={"SCRUM"}/>
                <Skill color={'green'} icon={<FaJs size={20}/>} title={"English - Fluent"}/>
            </div>
        </Card>
    </div>
}
export default Skills;