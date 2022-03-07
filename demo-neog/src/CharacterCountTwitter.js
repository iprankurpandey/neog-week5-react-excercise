import { useState } from "react";


function CharacterCountTwitter(){
const [counter, setCounter] = useState(280)
const charcounter=()=> {
    // console.log(document.getElementById('input').value.length)
}
return(
    <div>
        <input id="input" placeholder="enter text"></input>
        <button onClick={charcounter}> count </button>
        <h1> total count is :  {counter}</h1>
        </div>
)

}

export default CharacterCountTwitter;