import styles from './Navbar.module.css'
import {FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
import {useState} from "react";
import ReactSwitch from "react-switch";
import logoDm from '../../Pictures/LogoDM.png';
import logoLm from '../../Pictures/LogoLM.png';
const Navbar = props => {
    const toggleTheme = () => {
        props.onThemeChange();
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    return  <div className={styles.Navbar}>
                <div className={styles.Navbar__Logo}>
                    <img src={props.theme === 'light' ? logoLm : logoDm} alt={"Logo of Website"}/>
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
                                     onColor="#7599FF"
                                     onHandleColor="#4877ff"
                                     handleDiameter={30}
                                     uncheckedIcon={false}
                                     checkedIcon={false}>
                        </ReactSwitch>
                    </div>
                </div>
            </div>
}
export default Navbar;