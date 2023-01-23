import styles from './Timeline.module.css';
const TimeLine = props => {
    const classes = props.className;
    return <div className={classes}>
        <div className={styles.layer}>
            <div className={styles.dot}/>
            <div className={styles.line}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.layer_text}>
            <p><b>{props.start}</b></p>
            <div className={styles.filler}/>
            <p><b>{props.end}</b></p>
        </div>
    </div>
}
export default TimeLine;