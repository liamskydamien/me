import hbrs from "../../../Pictures/HBRS.png";
import styles from "../contentStyles.module.css";
import specificStyles from "./hbrsStyles.module.css";
import {FaCode, FaNetworkWired, FaPoll, FaRegLightbulb} from "react-icons/fa";
import React from "react";

const HBRSComponent = () => {
    return <div>
        <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Hochschule Bonn-Rhein-Sieg</h4>
            <h5>Bachelor of Science Wirtschaftsinformatik</h5>
            <p>Derzeit im 3. Fachsemester voraussichtlicher Abschluss 10/2024.
                Aktueller Notendurchschnitt: 1.7
            </p>
        </div>
        <div className={styles.skills + " " + specificStyles.isExpanded}>
            <div className={styles.skill}><FaCode/> Software Engineering</div>
            <div className={styles.skill}><FaPoll/> IT-Controlling</div>
            <div className={styles.skill}><FaCode/> Web Development</div>
            <div className={styles.skill}><FaRegLightbulb/> Design Thinking</div>
            <div className={styles.skill}><FaNetworkWired/> IT-Systems</div>
        </div>
    </div>
}
export default HBRSComponent;