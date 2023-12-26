import React, { useState, useEffect } from "react";

import Dice1 from './Dice_1.jpg';
import Dice2 from './Dice_2.jpg';
import Dice3 from './Dice_3.jpg';
import Dice4 from './Dice_4.jpg';
import Dice5 from './dice_5.jpg';
import Dice6 from './dice_6.jpg';

const Game = () => {
  const [total, setTotal] = useState(0);
  const [click, setClick] = useState(false);
  const [rand_num, setRand_num] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [warning, setWarning] = useState("");
  const [rules, setRules] = useState("");
  const [diceRolled, setDiceRolled] = useState(false);




  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const rulesHandler = () => {
    setRules(
      <div className="text-black text-sm">
        <p className="font-bold">How to Play Dice Game</p>
        <div>
          <p>Select any Number</p>
          <p>Click on the Dice</p>
          <p>If selected number is equal to the dice: score = score + selected No</p>
          <p>Else score: Score - selected No.</p>
        </div>
      </div>
    );
  };

  const handleButtonClick = (number) => {
    setSelectedNumber(number);
    setClick(true);
  };

  const diceHandler = () => {
    if (click) {
      const generated = Math.floor(Math.random() * 6 + 1);
  
      // Update rand_num and selectedNumber in the next render
      setRand_num(generated);
      setSelectedNumber(selectedNumber);
  
      // Use a state variable to track whether the dice roll has occurred
      setDiceRolled(true);
    } else {
      setWarning("Select a number first");
    }
  };
  
  // Use useEffect to perform actions after the state is updated
  useEffect(() => {
    // Check the condition after the state is updated
    if (diceRolled) {
      if (selectedNumber === rand_num) {
        setTotal((prevTotal) => prevTotal + selectedNumber);
      } else {
        setTotal((prevTotal) => prevTotal - selectedNumber);
      }
  
      // Reset click state and selectedNumber
      setClick(false);
      setSelectedNumber(null);
  
      // Reset the diceRolled state variable
      setDiceRolled(false);
    }
  }, [diceRolled, rand_num, selectedNumber]);
  
  
  const getDiceImage = () => {
    return diceImages[rand_num - 1];
  };
  return (
    <div className="container mx-auto mt-8 p-4 bg-slate-50 text-black text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Let's Play
       
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl mb-4">
        Total Score: {total}
      </div>
      <div className="mb-4">
        <p className="text-lg">Selected Number: {selectedNumber}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {arr.map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white ease-in"
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 text-red-500">{warning}</div>

      <div className="mb-4 flex flex-col items-center">
        
{/* dice here */}

<div onClick={diceHandler} className="dice-container h-28 w-28">
        <img src={getDiceImage()} alt={`Dice ${rand_num}`} />
      </div>

            
        
        <div className="mt-2">Dice No: {rand_num}</div>
      </div>

      <button
        onClick={rulesHandler}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Show Rules
      </button>

      <div className="mt-4">{rules}</div>
    </div>
  );
};

export default Game;
