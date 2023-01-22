import React from "react";
import GAOComponent from "./ChildComponents/GAOComponent";
import styles from "./contentStyles.module.css";
import SECACAMComponent from "./ChildComponents/SECACAMComponent";
const ListofWork = props => {
    return <div className={styles}>
            <h3>Work-Experience</h3>
            <GAOComponent/>
            <SECACAMComponent/>
            <SECACAMComponent theme={props.theme}/>
        </div>
}
export default ListofWork;