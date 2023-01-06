import Slideshow from "./Slideshow";
import styles from "./SliderAndButtons.module.css";

const SliderAndButtons = props =>{
    const classes = styles.layout + " " +  props.className;
    return <div className={classes}>
        <Slideshow></Slideshow>
    </div>
}
export default SliderAndButtons;