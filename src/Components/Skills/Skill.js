import styles from './Skill.module.css'
const Skill = props => {
    const color = () => {
        switch (props.color) {
            case 'green':
                return styles.green;
            case 'yellow':
                return styles.yellow;
            case 'blue':
                return styles.blue;
            case 'darkGreen':
                return styles.darkGreen;
            case 'purple':
                return styles.purple;
            case 'darkPurple':
                return styles.darkPurple;
            case 'orange':
                return styles.orange;
            default:
                return styles.darkBlue;
        }
    }

    const classes = styles.wrapper + ' ' + color();
    return <div className={classes}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.title}>{props.title}</div>
    </div>
}

export default Skill;