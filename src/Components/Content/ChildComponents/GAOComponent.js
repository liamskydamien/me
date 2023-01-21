import styles from "./componentStyles.module.css";
import gao from "../../../Pictures/GaO.png";
import React from "react";

const GAOComponent = () => {
    return <div className={styles.wrapper}>
        <img src={gao} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Gymnasium am Ölberg</h4>
            <h5>Allgemeine Hochschulreife</h5>
            <p>Abschluss am 06/2020 mit einem
                Notendurchschnitt von 2.0</p>
        </div>
    </div>
}
export default GAOComponent;