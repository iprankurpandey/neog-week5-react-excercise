import {useState} from 'react';
function ChangebgColor() {
    const [color, setColor] = useState(color:red? white : red );

    const bgcolorchange =()=> {
      if (color === 'red'){
        setColor('white')
      }
      else{
        setColor('red')
      }
    }
    return (
        <div>
        <h1>heading</h1>
        <button onClick={bgcolorchange}>click me</button>
        </div>
    )
}

export default ChangebgColor;