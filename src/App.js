import React from 'react';
import Dice from './components/dice';

function App() {
    return (
        <div>
            <h1 className = "header">Счастливый Кубик</h1>
            <Dice 
                images={[
                    "/dice-img/dice 1.png",
                    "/dice-img/dice 2.png",
                    "/dice-img/dice 3.png",
                    "/dice-img/dice 4.png",
                    "/dice-img/dice 5.png",
                    "/dice-img/dice 6.png",
                ]}
                throwGif="/dice-img/dice-game.gif" 
                initialImage="/dice-img/initialImage.png"
            />
        </div>
    );
}

export default App;
