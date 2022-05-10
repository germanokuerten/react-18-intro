import { useState } from "react"

function Counter(props) {

    // let counter = 0

    // Declare State            // useState receives the original value
    const [counter, setCounter] = useState(0)

    const [counter2, setCounter2] = useState(0)
    
    const addToCounter = () => {
        // counter += 1

        setCounter((oldCounter) => oldCounter+1)
        console.log(counter)
    }

    const addToCounter2 = () => {
        // counter += 1

        setCounter2((oldCounter) => oldCounter+1)
        console.log(counter)
    }

    return <>
    <h1 style={{ 
        color: `rgb(${counter*100}, 100, ${counter*100})`
    }}>{counter}</h1>
    <button onClick={addToCounter}>Add One</button>

    <h1>{counter2}</h1>
    <button onClick={addToCounter2}>Add One</button>
    
    </>
}

export default Counter