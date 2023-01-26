import styles from './IconSkill.module.css';
const IconSkill = props =>{
    return <div className={styles.wrapper}>
        {props.icon}
        <p>{props.name}</p>
    </div>
};
export default IconSkill;