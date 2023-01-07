import {useState, useEffect} from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Slideshow.module.css';
import Picture from "./Picture";

const Slideshow = props => {
    const classes = props.className + " " + styles.container;
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0);
    }, []);
    const cards = [
        {id: 0, src: 0},
        {id: 1, src: 1},
        {id: 2, src: 2},
        {id: 3, src: 0},
        {id: 4, src: 1},
        {id: 5, src: 2}
    ];

    const getNextIndex = () => {
        return index === cards.length - 1 ? 0 : index + 1;
    }

    const getPrevIndex = () => {
        return index <= 0 ? cards.length - 1 : index - 1;
    }

    const renderCards = () => {
        let indexLeft = getPrevIndex();
        let indexRight = getNextIndex();
        return cards.map((card) => {
            let className = "";
            if (index === card.id) {
                className = styles.picture + " " +  styles.pictureActive;
            }
            else if(indexRight === card.id) {
                className = styles.picture + " " + styles.right;
            }
            else if(indexLeft === card.id) {
                className = styles.picture + " " +  styles.left;
            }
            else {
                className = styles.pictureInactive + " " + styles.picture;
            }
            return <Picture key={card.id} src={card.src} className={className}></Picture>
        })
    }

    const next = () => {
        index === cards.length - 1 ? setIndex(0) : setIndex(index + 1);
    }

    const prev = () => {
        index <= 0 ? setIndex(cards.length - 1) : setIndex(index - 1);
    }


    return <div className={classes}>
        <div className={styles.slider}>
            {
                renderCards()
            }
            <div className={styles.buttons}>
                <button id="prev" className={styles.button + " " + styles.buttonLeft} onClick={prev}><FaArrowLeft/></button>
                <button id="next" className={styles.button + " " + styles.buttonRight} onClick={next}><FaArrowRight/></button>
            </div>
        </div>
        <div className={styles.buttons}>
            <button id="prev" className={styles.button + " " + styles.buttonLeft} onClick={prev}><FaArrowLeft/></button>
            <button id="next" className={styles.button + " " + styles.buttonRight} onClick={next}><FaArrowRight/></button>
        </div>
    </div>
}
export default Slideshow;