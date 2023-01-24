import kantian from "../../../Pictures/Kantian_White.png";
import kantianDark from "../../../Pictures/Kantian_Black.png";
import styles from "./contentStyles.module.css";
import React from "react";
import Card from "../../../UI/Card/Card";

const Kantian = props => {
    return <Card className={styles.wrapper}>
        <img src={props.theme === 'light' ? kantianDark : kantian} alt="Logo" className={styles.picture}/>
        <div className={styles.content}>
            <h4>Kantian</h4>
            <h5>Founder</h5>
            <p>An E-Commerce Shop focusing on manufacturing and selling sustainable T-Shirts</p>
        </div>
    </Card>
}
export default Kantian;