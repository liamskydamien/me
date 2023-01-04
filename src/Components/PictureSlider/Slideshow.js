import {useState, useEffect} from "react";
import classes from './Slideshow.module.css';

const Slideshow = props => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    },[]);

    const next = () => {
        setIndex(index + 1);
    }

    const prev = () => {
        setIndex(index - 1);
    }

    const images = [
        "../../Pictures/VaderSidesSquare.png"
    ]
    return <div className={classes.slideShow}>
        <img className={classes.mainImage} src={images[index]}/>

    </div>
}