import "./Button.css"

// function declaration (start with word function)
function Button (props) {
    return (
    <button className="button">{props.text}{props.children}</button>
    )
}

// select and press shift and {} to wrap it in it

export default Button


// function expression
// const functionname = (paramenter) => {function code here}