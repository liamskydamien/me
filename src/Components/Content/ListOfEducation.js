import React from 'react';
import styles from './contentStyles.module.css';
import hbrs from "../../Pictures/Download.png";
const ListOfEducation = () => {
    return <React.Fragment>
        <h3>Education</h3>
            <div className={styles.wrapper}>
                <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
                <h4>Hochschule Bonn-Rhein-Sieg</h4>
                <h5>Bachelor of Science Wirtschaftsinformatik</h5>
                <p>Derzeit im 3. Fachsemester voraussichtlicher Abschluss 2024.
                    Aktueller Notendurchschnitt: 1.7
                </p>
            </div>
        <div className={styles.wrapper}>
            <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
            <h4>Hochschule Bonn-Rhein-Sieg</h4>
            <h5>Bachelor of Science Wirtschaftsinformatik</h5>
            <p>Derzeit im 3. Fachsemester voraussichtlicher Abschluss 2024.
                Aktueller Notendurchschnitt: 1.7
            </p>
        </div>
        <div className={styles.wrapper}>
            <img src={hbrs} alt="Logo der Hochschule Bonn-Rhein-Sieg"/>
            <h4>Hochschule Bonn-Rhein-Sieg</h4>
            <h5>Bachelor of Science Wirtschaftsinformatik</h5>
            <p>Derzeit im 3. Fachsemester voraussichtlicher Abschluss 2024.
                Aktueller Notendurchschnitt: 1.7
            </p>
        </div>
    </React.Fragment>
}
export default ListOfEducation;