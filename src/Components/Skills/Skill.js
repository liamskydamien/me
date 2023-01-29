import styles from './Skill.module.css'
const Skill = props => {
    const classes = styles.wrapper + ` styles.${props.color}`;
    return <div className={classes}>
        <div>{props.icon}</div>
        <div>{props.title}</div>
    </div>
}

export default Skill;