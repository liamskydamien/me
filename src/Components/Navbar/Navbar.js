import styles from './Navbar.module.css'
import {FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
const Navbar = () => {
    return <div className={styles.Navbar}>
        <div className="Navbar__Logo">
            <a href="/">Logo</a>
        </div>
        <div className="Navbar__Links">
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
        </div>
    </div>
}
export default Navbar;