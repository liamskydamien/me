import Card from "../../UI/Card/Card";
import styles from "./Skills.module.css";
import {
    FaAtlassian, FaBusinessTime, FaCamera,
    FaCode,
    FaCss3Alt,
    FaFigma,
    FaFlag, FaGlobe,
    FaHtml5,
    FaJava, FaJira,
    FaJs, FaLightbulb,
    FaReact, FaSprayCan,
} from "react-icons/fa";
import Skill from "./Skill";
import {
    SiAdobexd,
    SiAdobephotoshop,
    SiWordpress,
    SiMicrosoftpowerpoint,
    SiMicrosoftexcel, SiMicrosoftword
} from "react-icons/si";
import {MdSurfing} from "react-icons/md";
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
                <Skill color={'green'} icon={<FaFlag size={20}/>} title={"English - Fluent"}/>
            </div>
        </Card>
        <Card className={styles.hobbies}>
            <h3>Interests</h3>
            <div className={styles.list}>
                <Skill color={'darkPurple'} icon={<FaCode size={20}/>} title={"Programming"}/>
                <Skill color={'green'} icon={<FaCamera size={20}/>} title={"Photography"}/>
                <Skill color={'orange'} icon={<FaGlobe size={20}/>} title={"Traveling"}/>
                <Skill color={'darkBlue'} icon={<MdSurfing size={20}/>} title={"Surfing"}/>
                <Skill color={'darkGreen'} icon={<FaBusinessTime size={20}/>} title={"Entrepreneurship"}/>
                <Skill color={'blue'} icon={<FaSprayCan size={20}/>} title={"Street-Art"}/>
            </div>
        </Card>
        <Card className={styles.communication}>
            <h3>Office</h3>
            <div className={styles.list}>
                <Skill color={'darkGreen'} icon={<SiMicrosoftexcel size={20}/>} title={"Microsoft Excel"}/>
                <Skill color={'orange'} icon={<SiMicrosoftpowerpoint size={20}/>} title={"Microsoft PowerPoint"}/>
                <Skill color={'darkBlue'} icon={<SiMicrosoftword size={20}/>} title={"Microsoft Word"}/>
            </div>
        </Card>
        <Card className={styles.management}>
            <h3>Soft-Skills / Management</h3>
            <div className={styles.list}>
                <Skill color={'blue'} icon={<FaAtlassian size={20}/>} title={"Confluence"}/>
                <Skill color={'darkblue'} icon={<FaJira size={20}/>} title={"JIRA"}/>
                <Skill color={'purple'} icon={<FaLightbulb size={20}/>} title={"Design Thinking"}/>
            </div>
        </Card>
    </div>
}
export default Skills;