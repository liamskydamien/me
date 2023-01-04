import Card from "../UI/Card/Card";
import "./Picture.css";

const Picture = (props) => {
    const classes = props.className;
    return  <Card className={classes + " backGround"}>
                <img src={props.src} alt={props.a}></img>
            </Card>
}
export default Picture;