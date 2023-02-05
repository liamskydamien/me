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
                <div className={styles.title}>
                    <h1>Liam Hess Personal Portfolio / CV</h1>
                </div>
                <div className={styles.socials}>
                    <a className={styles.Email} href="mailto:liamskydamien@gmail.com">
                        <FaEnvelope size={35}/>
                    </a>
                    <a className={styles.LinkedIn} href="https://www.linkedin.com/in/liam-he%C3%9F-b91160219/">
                        <FaLinkedinIn size={35}/>
                    </a>
                    <a className={styles.GitHub} href="https://github.com/liamskydamien">
                        <FaGithub size={35}/>
                    </a>
                    <a className={styles.Instagram} href="https://www.instagram.com/liamsky_/">
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