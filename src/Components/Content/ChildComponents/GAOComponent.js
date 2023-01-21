import styles from "./componentStyles.module.css";
import gao from "../../../Pictures/GaO.png";
import React, {useState} from "react";
import specificStyles from "./gaoStyles.module.css";
import {FaSquareRootAlt, FaCity, FaCode, FaRegComments, FaSquare} from "react-icons/fa";

const GAOComponent = () => {
    const [isExpanded, setIsExpanded] = useState(specificStyles.hidden);
    const expansionHandler = () => {
        if (isExpanded === specificStyles.hidden) {
            setIsExpanded(specificStyles.active);
        } else {
            setIsExpanded(specificStyles.hidden);
        }
    };
    return <div className={styles.wrapper} onClick={expansionHandler}>
        <img src={gao} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Gymnasium am Ölberg</h4>
            <h5>Allgemeine Hochschulreife</h5>
            <p>Abschluss am 06/2020 mit einem
                Notendurchschnitt von 2.0</p>
        </div>
        <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
            <div className={styles.skill}><FaSquareRootAlt/> Mathematics</div>
            <div className={styles.skill}><FaCity/> Macro-Economics and Politics</div>
            <div className={styles.skill}><FaCode/> Informatics</div>
            <div className={styles.skill}><FaRegComments/> English</div>
        </div>
    </div>
}
export default GAOComponent;