import styles from './LongTimeLine.module.css';
const LongTimeLine = props => {
    const classes = props.className;
    return <div className={classes}>
        <div className={styles.layer}>
            <div className={styles.dot}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.layer_text}>
            <p><b>today</b></p>
            <div className={styles.filler}/>
            <p><b>{2021}</b></p>
        </div>
    </div>
}
export default LongTimeLine;