import dice1 from './../assets/dice_1.png'
import dice2 from './../assets/dice_2.png'
import dice3 from './../assets/dice_3.png'
import dice4 from './../assets/dice_4.png'
import dice5 from './../assets/dice_5.png'
import dice6 from './../assets/dice_6.png'

const RoleDice = ({currentDice, rollDice}) => {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    return (
        <div onClick={rollDice}>
            <img src={diceImages[currentDice - 1]} alt='dice-img'></img>
        </div>
    )
}

export default RoleDice