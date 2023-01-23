import React from "react";
import styles from "./contentStyles.module.css";
import SECACAMComponent from "./ChildComponents/SECACAMComponent";
import ZDHZertComponent from "./ChildComponents/ZDHZertComponent";
const ListofWork = props => {
    return <div className={styles}>
            <h3>Work-Experience</h3>
            <ZDHZertComponent/>
            <SECACAMComponent theme={props.theme}/>
        </div>
}
export default ListofWork;