import React from 'react'
import Button from './Button'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import { useState } from "react";
import RoleDice from './RoleDice'


const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [alert, setAlert] = useState();
  const toggleRules = () => {
    setShowRules(!showRules)
  }
  // generate a random number between 1 and 6
  const rollDice = () => {
      if (!selectedNumber) {
        setAlert("Please select a number first");
        return;
      };
      setAlert(null);
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomNumber);
      if (selectedNumber === randomNumber) {
        setScore(score + randomNumber);
      } else {
        setScore(score - 2);
      }
      setSelectedNumber(null);
  }
  return (
    <MainStyle>
      <div className='top-section'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} alert={alert} setAlert={setAlert}/>
      </div>
      <div className='bottom'>
        <RoleDice currentDice={currentDice} rollDice={rollDice} />
        <p>Click on Dice to roll</p>
        <Button text='Reset Score' isDark={false} setScore={setScore} setCurrentDice={setCurrentDice}/>
        <Button text={showRules?'Hide Rules':'Show Rules'} isDark={true} showRule={toggleRules}/>
      </div>
      {showRules && <div className='rules'>
        <h1>How to play dice game</h1>
        <br />
        <p>Select any number</p>
        <br />
        <p>Click on dice image</p>
        <p> after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted</p>
      </div>}
    </MainStyle>
  )
}

export default GamePlay

const MainStyle = styled.div`
  .rules{
    width: 794px;
    height: 208px;
    background: lightpink;
    margin: 0 auto;
    padding: 10px 10px;
    p{
      margin: unset;
    }
    h1{
      margin: unset;
    }
  }
  
  .top-section{
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .bottom{
    display: block;
    width: 250px;
    height: 450px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    p {
      font-size: 24px;
      margin: unset;
    }
    Button {
      padding: 10px 18px;
      width: 220px;
      height: 44px;
      border-radius: 5px;
      border: 1px solid black;
      font-weight: 1000;
      background-color: ${(p) => (p.isDark ? "black" : "white")};
      color: ${(p) => (!p.isDark ? "black" : "white")};
      margin: 10px 10px;
    }
  }
`