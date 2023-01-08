import styles from "./Picture.module.css";
import pic1 from "../../Pictures/Selbstportrait.jpg";
import pic2 from "../../Pictures/LiamBackgroundSea.jpg";
import pic3 from "../../Pictures/LiamBackgroundBeach.jpg";
import pic4 from "../../Pictures/LiamBackgroundKohPhanganView.jpg";
import pic5 from "../../Pictures/LiamBackgroundLoco.jpg";

const Picture = (props) => {
    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5
    ];

    const classes = props.className + " " + styles.backGround + " " + images[props.src];
    return  <img src={images[props.src]} alt={"Ein Bild von mir"} className={classes}/>
}
export default Picture;