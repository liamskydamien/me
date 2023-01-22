import React from 'react';
import HBRSComponent from "./ChildComponents/HBRSComponent";
import GAOComponent from "./ChildComponents/GAOComponent";
import styles from "./contentStyles.module.css";
const ListOfEducation = () => {
    return <div className={styles}>
        <h3>Education</h3>
            <HBRSComponent/>
            <GAOComponent/>
    </div>
}
export default ListOfEducation;