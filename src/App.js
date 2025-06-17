import React from 'react';
import Dice from './components/Dice/Dice';
import diceImage1 from './components/Dice/dice-img/dice 1.png'; 
import diceImage2 from './components/Dice/dice-img/dice 2.png';
import diceImage3 from './components/Dice/dice-img/dice 3.png';
import diceImage4 from './components/Dice/dice-img/dice 4.png';
import diceImage5 from './components/Dice/dice-img/dice 5.png';
import diceImage6 from './components/Dice/dice-img/dice 6.png';
import throwGif from './components/Dice/dice-img/dice-game.gif'; 
import initialImage from './components/Dice/dice-img/initialImage.png'; 

function App() {
    return (
        <div>
            <Dice 
                images={[
                    diceImage1,
                    diceImage2,
                    diceImage3,
                    diceImage4,
                    diceImage5,
                    diceImage6,
                ]}
                throwGif={throwGif} 
                initialImage={initialImage}
            />
        </div>
    );
}

export default App;
