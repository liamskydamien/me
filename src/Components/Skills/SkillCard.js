import Card from "../../UI/Card/Card";
import IconSkill from "./IconSkill";

const SkillCard = props => {
    return <Card>
        <h3>{props.h}</h3>
        <ul>
            {
                props.items.map((item, id) => {
                return <IconSkill key={id} icon={item.icon} name={item.title}/>})
            }
        </ul>
    </Card>

};
export default SkillCard;