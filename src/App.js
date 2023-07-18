import './App.css'
import {useState} from 'react'
function App() {
    const [counter , setCounter] = useState(0)

    const handleNegative = () => {
        setCounter(counter-1)
    }

    const handlePositive = () =>{
        setCounter(counter+1)
    }
    return (
        <div className='button'>
            <button onClick={handleNegative}>-</button>
            <h1>{counter}</h1>
            <button onClick={handlePositive}>+</button>
        </div>
    )
}


export default App