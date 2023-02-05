import styles from "./Footer.module.css";
import {FaEnvelope, FaReact} from "react-icons/fa";
const Footer = () => {
    return <footer className={styles.footer}>
        <div>
            <p>This site was fully created using React <FaReact color={"#61DBFB"}/> <br/>
                Since its my first site created with React please dont judge to hard :)
            </p>
            <p>
                Feel free to contact my any time at <a href="mailto:liamskydamien@gmail.com" className={styles.email}> <FaEnvelope/> liamskydamien@gmail.com </a>
            </p>
            <p>© 2021 - All Rights Reserved</p>
        </div>
    </footer>
}
export default Footer;