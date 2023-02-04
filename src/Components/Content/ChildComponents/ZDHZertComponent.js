import React, {useState} from "react";
import specificStyles from "./zdh.module.css";
import styles from "./componentStyles.module.css";
import zdhzert from "../../../Pictures/ZDHZERT.png";
import TimeLine from "../TimeLine/TimeLine";

const ZDHZertComponent = () => {
    const [isExpanded, setIsExpanded] = useState(specificStyles.hidden);
    const [mobileExpanded, setMobileExpanded] = useState('');
    const expansionHandler = () => {
        if (isExpanded === specificStyles.hidden) {
            setIsExpanded(specificStyles.active);
            setMobileExpanded(styles.contentActive);
        } else {
            setIsExpanded(specificStyles.hidden);
            setMobileExpanded('');
        }
    };
    return <div className={styles.wrapper} onClick={expansionHandler}>
        <TimeLine className={styles.timeline} start={"10/2022"} end={"today"}/>
        <img src={zdhzert} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
        <div className={styles.content + " " + mobileExpanded}>
            <h4>Project-Manager and Marketing</h4>
            <h5>At ZDH-Zert GmbH</h5>
            <p>As a working student in project-management and marketing.</p>
        </div>
        <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
            <p>
                At ZDH-Zert GmbH I was responsible for implementing the new corporate website. I was also helping implementing a new information system.
                My tasks included:
                <ul>
                    <li>Project management</li>
                    <li>Web development</li>
                    <li>Information system development</li>
                </ul>
            </p>
        </div>
    </div>
}
export default ZDHZertComponent;