import React from "react";
import GAOComponent from "./ChildComponents/GAOComponent";
import styles from "./contentStyles.module.css";
import SECACAMComponent from "./ChildComponents/SECACAMComponent";
const ListofWork = () => {
    return <div className={styles}>
            <h3>Education</h3>
            <GAOComponent/>
            <SECACAMComponent/>
        </div>
}
export default ListofWork;