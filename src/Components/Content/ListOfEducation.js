import React from 'react';
import HBRSComponent from "./ChildComponents/HBRSComponent";
import GAOComponent from "./ChildComponents/GAOComponent";
import styles from "./contentStyles.module.css";
const ListOfEducation = () => {
    return <React.Fragment>
        <h3>Education</h3>
            <HBRSComponent/>
            <GAOComponent/>
    </React.Fragment>
}
export default ListOfEducation;