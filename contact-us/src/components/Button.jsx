
const Button = (props) => {
  return (
    <button className={props.isOutline?'isOutline':''}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button