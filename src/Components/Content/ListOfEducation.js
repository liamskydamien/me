import React from 'react';
import styles from './contentStyles.module.css';
import gao from "../../Pictures/GaO.png";
import HBRSComponent from "./ChildComponents/HBRSComponent";
const ListOfEducation = props => {
    const [isExpanded, setIsExpanded] = React.useState(styles.hidden);

    return <React.Fragment>
        <h3>Education</h3>
            <HBRSComponent className={styles.wrapper}/>
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