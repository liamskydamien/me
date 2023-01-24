import Card from "../../UI/Card/Card";
import styles from './SelfEmployed.module.css'
import Kantian from "./CompanieComponents/Kantian";
import KantianWebdesign from "./CompanieComponents/KantianWebdesign";
import WipUG from "./CompanieComponents/WipUG";
const SelfEmployed = props => {
    const classes = props.className;
    return <Card className={classes}>
        <h2>Entrepreneurship</h2>
        <div className={styles.flex}>
            <WipUG/>
            <KantianWebdesign theme={props.theme}/>
            <Kantian theme={props.theme}/>
        </div>
    </Card>
}
export default SelfEmployed;