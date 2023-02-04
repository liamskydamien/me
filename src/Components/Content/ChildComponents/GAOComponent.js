import styles from "./componentStyles.module.css";
import gao from "../../../Pictures/GaO.png";
import React, {useState} from "react";
import specificStyles from "./gaoStyles.module.css";
import TimeLine from "../TimeLine/TimeLine";

const GAOComponent = () => {
    const [isExpanded, setIsExpanded] = useState(specificStyles.hidden);
    const expansionHandler = () => {
        if (isExpanded === specificStyles.hidden) {
            setIsExpanded(specificStyles.active);
        } else {
            setIsExpanded(specificStyles.hidden);
        }
    };
    return <div>
        <div className={styles.wrapper} onClick={expansionHandler}>
            <TimeLine className={styles.timeline} start={"06/2012"} end={"06/2020"}/>
            <img src={gao} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
            <div className={styles.content}>
                <h4>Gymnasium am Ölberg</h4>
                <h5>General University Entrance Qualification</h5>
                <p>Graduated in 06/2020 <br/>
                    GPA: 2.0 (1.0 being the best)
                </p>
            </div>
            <div className={styles.skills + " " + isExpanded + " " + specificStyles.skills}>
                <p>
                    At the "Gymnasium am Ölberg" I received my high school diploma with a grade of 2.0. <br/>
                    My main focus was on the subjects of mathematics, sociology, english and computer science.
                </p>
            </div>
        </div>
    </div>
}
export default GAOComponent;