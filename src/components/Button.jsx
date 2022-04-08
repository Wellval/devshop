function Button(props) {
    return (
        <a className={"btn " + props.classname}>{props.content.toUpperCase()}</a>
    )
}

export default Button;