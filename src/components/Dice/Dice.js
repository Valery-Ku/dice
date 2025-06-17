import styles from "./dice.module.css";
import React, { useState } from 'react';

export default function Dice({ images, throwGif, initialImage }) {
    const [currentImage, setCurrentImage] = useState(initialImage);
    const [isRolling, setIsRolling] = useState(false);

    function rollDice() {
        setIsRolling(true);
        setCurrentImage(throwGif); 
        setTimeout(() => {
            const index = Math.floor(Math.random() * images.length);
            setCurrentImage(images[index]);
            setIsRolling(false);
        }, 1000);
    }

    return (
        <div className={styles.Dice}>
            <div className={styles.header}>Счастливый кубик</div> {}
            <div className={styles.Dice__images}>
                {isRolling ? (
                    <img className={styles.Dice__gif} src={currentImage} alt="Гиф кубика" />
                ) : (
                    <img className={styles.Dice__part} src={currentImage} alt="Результат броска" />
                )}
            </div>
            <div className={styles.Button}>
                <button onClick={rollDice} className={styles.ThrowDice} aria-label="Бросить кубик">Бросок!</button>
            </div>
        </div>
    );
}
