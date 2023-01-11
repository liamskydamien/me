import styles from './Navbar.module.css'
import {FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
import {useState} from "react";
import ReactSwitch from "react-switch";
const Navbar = props => {
    const toggleTheme = () => {
        props.onThemeChange();
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    return  <div className={styles.Navbar}>
                <div className="Navbar__Logo">
                    <a href="/">Logo</a>
                </div>
                <div className={styles.navbarLinks}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div className={styles.socials}>
                    <a className={styles.Email} href="/">
                        <FaEnvelope size={35}/>
                    </a>
                    <a className={styles.LinkedIn} href="/">
                        <FaLinkedinIn size={35}/>
                    </a>
                    <a className={styles.GitHub} href="/">
                        <FaGithub size={35}/>
                    </a>
                    <a className={styles.Instagram} href="/">
                        <FaInstagram size={35}/>
                    </a>
                    <div className={styles.themeSwitch}>
                        <ReactSwitch checked={checked}
                                     onChange={toggleTheme}
                                     onColor="#86d3ff"
                                     onHandleColor="#2693e6"
                                     handleDiameter={30}
                                     uncheckedIcon={false}
                                     checkedIcon={false}>
                        </ReactSwitch>
                    </div>
                </div>
            </div>
}
export default Navbar;