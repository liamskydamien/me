import styles from "./Picture.module.css";

const Picture = (props) => {
    const images = [
        styles.first,
        styles.second,
        styles.third
    ];

    const classes = props.className + " " + styles.backGround + " " + images[props.src];
    return  <div className={classes}/>
}
export default Picture;