import styles from "./Picture.module.css";
import pic1 from "../../Pictures/Unbenannt-1.png";
import pic2 from "../../Pictures/Unbenannt-2.png";
import pic3 from "../../Pictures/Unbenannt-3.png";

const Picture = (props) => {
    const images = [
        pic1,
        pic2,
        pic3
    ];

    const classes = props.className + " " + styles.backGround + " " + images[props.src];
    return  <img src={images[props.src]} alt={"Ein Bild von mir"} className={classes}/>
}
export default Picture;