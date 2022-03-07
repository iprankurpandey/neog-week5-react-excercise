import {useState} from 'react';
function ChangebgColor() {
  const [bgColor, setBgColor] = useState('red');

  const colorChangeHandler = () =>
    bgColor === 'red' ? setBgColor('white') : setBgColor('red');

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={colorChangeHandler}>Click Me!</button>
    </div>
    )
}
export default ChangebgColor;

