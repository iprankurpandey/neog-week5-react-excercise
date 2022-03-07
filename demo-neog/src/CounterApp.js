import {useState} from 'react';
function CounterApp(){
    const [counter, setcounter] = useState('0');
    const countAdd1=()=> setcounter(counter+1);
    const countRemove1=()=> setcounter(counter-1);

return (
    <div>
    <h3>counter is : {counter}</h3>
    <button onClick={countAdd1}>++</button>
    <button onClick={countRemove1}>--</button>
</div>
)}

export default CounterApp;