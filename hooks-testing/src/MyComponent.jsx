import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Name not defined")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const handleNameChange = (() => {
        setName("rlcosta")
    })

    const decrementAge = (() => {
        setAge(age - 1)
    })

    const incrementAge = (() => {
        setAge(age + 1)
    })

    const handleChangeIsEmployed = (() => {
        setIsEmployed(!isEmployed)
    })

    return(
        <>
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleNameChange}>Set Name</button>
            <br />
            <button onClick={decrementAge}>Decrement Age</button>
            <button onClick={incrementAge} style={{marginLeft: "10px"}}>Increment Age</button>
            <p>is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={handleChangeIsEmployed}>toggle status</button>
        </div>
        </>
    )
}

export default MyComponent