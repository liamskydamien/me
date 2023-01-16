import React from 'react';
import styles from './contentStyles.module.css';
import hbrs from "../../Pictures/HBRS.png";
import gao from "../../Pictures/GaO.png";
import {FaCode, FaNetworkWired, FaPoll, FaRegLightbulb} from "react-icons/fa";
const ListOfEducation = props => {
    const [isExpanded, setIsExpanded] = React.useState(props.isExpanded);

    return <React.Fragment>
        <h3>Education</h3>
            <div className={styles.wrapper} onClick= {() => setIsExpanded(!isExpanded)}>
                <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
                <div className={styles.content}>
                    <h4>Hochschule Bonn-Rhein-Sieg</h4>
                    <h5>Bachelor of Science Wirtschaftsinformatik</h5>
                    <p>Derzeit im 3. Fachsemester voraussichtlicher Abschluss 10/2024.
                        Aktueller Notendurchschnitt: 1.7
                    </p>
                </div>
                <div className={styles.skills}>
                    <div className={styles.skill}><FaCode/> Software Engineering</div>
                    <div className={styles.skill}><FaPoll/> IT-Controlling</div>
                    <div className={styles.skill}><FaCode/> Web Development</div>
                    <div className={styles.skill}><FaRegLightbulb/> Design Thinking</div>
                    <div className={styles.skill}><FaNetworkWired/> IT-Systems</div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <img src={gao} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
                <div className={styles.content}>
                    <h4>Gymnasium am Ölberg</h4>
                    <h5>Allgemeine Hochschulreife</h5>
                    <p>Abschluss am 06/2020 mit einem
                        Notendurchschnitt von 2.0</p>
                </div>

            </div>
    </React.Fragment>
}
export default ListOfEducation;