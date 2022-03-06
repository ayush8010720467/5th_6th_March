function Button(props){
    return <button onClick={props.callback}>{props.sign}</button>
}
export default Button;