import './App.css'
import {useState , useEffect} from 'react'
function App() {
    const [counter , setCounter] = useState(0)

    useEffect(()=>{
        setCounter(100)
    }, [])

    function handleNegative() {
        setCounter(counter-1)
    }
    function handlePositive() {
        setCounter(counter+1)
    }

    return(
        <div className='button'>
            <button onClick={handleNegative}>-</button>
            <h1>{counter}</h1>
            <button onClick={handlePositive}>+</button>
        </div>
    )
}

export default App