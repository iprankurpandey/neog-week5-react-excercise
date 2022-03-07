import {useState} from 'react'
const Counter=()=>{
 const [counter, setcounter] = useState(0)
 const increment=()=> setcounter(counter+1)
 const decrement=()=> setcounter(counter-1)
    return (
        <div>
            <h1> counter is : {counter}</h1>
            <button onClick={increment}>++</button>
            <button onClick={decrement}>--</button>
        </div>
    )
}

export default Counter;