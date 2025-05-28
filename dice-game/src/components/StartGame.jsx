import dices from './../assets/dices.png'
import styled from 'styled-components';


const StartGame = (props) => {
    return (
        <Conatiner>
            <div>
                <img src={dices} alt='dice-imgs' />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={props.toggleGame}>Play Now</Button>
            </div>
        </Conatiner>
    )
}

export default StartGame

const Conatiner = styled.div`
max-width: 1182px;
top: 180px;
left: 129px;
gap: 5px;
display: flex;
text-align: center;
margin: 200px auto;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1 {
            font-size: 96px;
            margin: unset;
        }

    }
`

const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
max-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background easy-in;


&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.1s background easy-in;
}
`