import styles from './Skill.module.css'
const Skill = props => {
    const color = () => {
        switch (props.color) {
            case 'red':
                return styles.red;
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
        <div>{props.icon}</div>
        <div>{props.title}</div>
    </div>
}

export default Skill;