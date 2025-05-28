import React from 'react'

const Button = ({text,isDark,showRule,setScore,setCurrentDice}) => {
  return (
    <button onClick={showRule?showRule:() => {
      setScore(0);
      setCurrentDice(1);
    }}> {text} </button>
  )
}

export default Button