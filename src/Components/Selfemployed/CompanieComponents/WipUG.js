import kantian from "../../../Pictures/Kantian_White.png";
import styles from "./contentStyles.module.css";
import React from "react";
import Card from "../../../UI/Card/Card";

const WipUG = () => {
    return <Card className={styles.wrapper}>
        <img src={kantian} alt="Logo" className={styles.picture}/>
        <div className={styles.content}>
            <h4>WiP GbR</h4>
            <h5>Co Founder</h5>
            <p>Still a secret I will tell you soon. I swear</p>
        </div>
    </Card>
}
export default WipUG;