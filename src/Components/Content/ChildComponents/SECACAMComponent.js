import React, {useState} from "react";
import specificStyles from "./secacamStyles.module.css";
import styles from "./componentStyles.module.css";
import secacamLight from "../../../Pictures/SECACAM_Light.png";
import secacamDark from "../../../Pictures/SECACAM_Dark.png";
import TimeLine from "../TimeLine/TimeLine";

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
        <TimeLine className={styles.timeline} start={"06/2020"} end={"10/2022"}/>
        <img src={props.theme === 'light' ? secacamLight : secacamDark} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Customer Service</h4>
            <h5>At SECACAM by Ventrade GmbH</h5>
            <p>As a working student in Customer-Service.</p>
        </div>
        <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
            <p className={styles.text}>
                I worked in customer-service at Ventrade GmbH, a company that develops and sells trail cameras. <br/>
                I helped our customers via E-Mail support to understand our products and resolve problems. <br/>
                I also helped to improve our support system by suggesting new features and improvements. And implemented a new Workflow for managing returns and communication between departments. <br/>
            </p>
        </div>
    </div>
}
export default SECACAMComponent;