import hbrs from "../../../Pictures/HBRS.png";
import styles from "./componentStyles.module.css";
import specificStyles from "./hbrsStyles.module.css";
import {FaCode, FaNetworkWired, FaPoll, FaRegLightbulb} from "react-icons/fa";
import React, {useState} from "react";
import TimeLine from "../TimeLine/TimeLine";

const HBRSComponent = () => {
    const [isExpanded, setIsExpanded] = useState(specificStyles.hidden);
    const expansionHandler = () => {
        if (isExpanded === specificStyles.hidden) {
            setIsExpanded(specificStyles.active);
        } else {
            setIsExpanded(specificStyles.hidden);
        }
    };
    return <div className={styles.wrapper} onClick={expansionHandler}>
        <TimeLine className={styles.timeline} start={"10/2021"} end={"today"}/>
        <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content}>
            <h4>Hochschule Bonn-Rhein-Sieg</h4>
            <h5>Bachelor of Science Business Informatics</h5>
            <p>Currently in 4th semester. Graduation 10/2024. <br/>
                GPA: 1.6 (1.0 = best, 4.0 = worst)
            </p>
        </div>
        <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
            <p className={styles.text}>
                Im currently studying at the University of Applied Sciences Bonn-Rhein-Sieg. I am in my 4th semester in the field of Business Information Systems. <br/>
                So far I learned a lot about programming and the basics of computer science. I also learned a lot about business and how to apply my knowledge in a business context. <br/>
            </p>
        </div>
    </div>
}
export default HBRSComponent;