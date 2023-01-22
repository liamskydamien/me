import React, {useState} from "react";
import specificStyles from "./hbrsStyles.module.css";
import styles from "./componentStyles.module.css";
import secacamLight from "../../../Pictures/SECACAM_Light.png";
import secacamDark from "../../../Pictures/SECACAM_Dark.png";
import {FaCode, FaNetworkWired, FaPoll, FaRegLightbulb} from "react-icons/fa";

const SECACAMComponent = props => {
    const [isExpanded, setIsExpanded] = useState(specificStyles.hidden);
    const expansionHandler = () => {
        if (isExpanded === specificStyles.hidden) {
            setIsExpanded(specificStyles.active);
        } else {
            setIsExpanded(specificStyles.hidden);
        }
    };


    return <div className={styles.wrapper} onClick={expansionHandler}>
        <img src={props.theme === 'light' ? secacamLight : secacamDark} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Customer Service</h4>
            <h5>At SECACAM by Ventrade GmbH</h5>
            <p>From 06/2020 to 10/2022
               I helped our customers via E-Mail support to understand our products and resolve problems.</p>
        </div>
        <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
            <p className={styles.text}>
                During my time at the university I have learned a lot about programming and software development.
                I have worked with a lot of different technologies and learned the fundamentals of software engineering aswell as the basics of business informatics.
                Furthermore I learned a lot about the agile development process and how to work in a team. I have also learned how to work with databases and how to design and implement a database schema.
                I have also learned how to work with version control systems and how to use them in a team.
            </p>
            <div className={styles.skill}><FaCode/> Software Engineering</div>
            <div className={styles.skill}><FaPoll/> IT-Controlling</div>
            <div className={styles.skill}><FaCode/> Web Development</div>
            <div className={styles.skill}><FaRegLightbulb/> Design Thinking</div>
            <div className={styles.skill}><FaNetworkWired/> IT-Systems</div>
        </div>
    </div>
}
export default SECACAMComponent;