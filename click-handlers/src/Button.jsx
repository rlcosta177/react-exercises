
function Button() {
    
    const handleClick = (event) => {
        event.target.innerText = "Button clicked"
        console.log(event)
    } 

    return(
        <>
        <button onClick={(event) => handleClick(event)}>Click me</button>
        </>
    )
}

export default Button