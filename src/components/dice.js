import "./dice.css";
import React, { useState } from "react";

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
        <div className="Dice">
            <div className="Dice__images">
                {isRolling ? (
                    <img className="Dice__gif" src={currentImage} alt="Гиф кубика" />
                ) : (
                    <img className="Dice__part" src={currentImage} alt="Результат броска" />
                )}
            </div>
            <div className="Button">
                <button onClick={rollDice} className="ThrowDice">Бросок!</button>
            </div>
        </div>
    );
}
