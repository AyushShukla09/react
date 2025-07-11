import {useState} from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGame = () => {
    setIsGameStarted(!isGameStarted)
  }
  return (
    <>
      {
        !isGameStarted ?
          <StartGame toggleGame={toggleGame}/> :
          <GamePlay />
      }
    </>
  )
}

export default App;
