import kantian from "../../../Pictures/Kantian_White.png";
import styles from "./contentStyles.module.css";
import React from "react";
import Card from "../../../UI/Card/Card";
import kantianDark from "../../../Pictures/Kantian_Black.png";

const KantianWebdesign = props => {
    return <Card className={styles.wrapper}>
        <img src={props.theme === 'light' ? kantianDark : kantian} alt="Logo" className={styles.picture}/>
        <div className={styles.content}>
            <h4>Liam Hess Webdesign</h4>
            <h5>Founder</h5>
            <p>I worked as a freelancing Webdesigner. Especially working on WordPress Websites.</p>
        </div>
    </Card>
}
export default KantianWebdesign;