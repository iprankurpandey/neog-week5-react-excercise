const button = document.getElementById('btn')
let heading= document.getElementById('heading')
let input = document.getElementById('input')
let div = document.getElementById('div')


function bgcolorchange(value){
   let values =  input.value.length
   let charCount = 280-values
   div.innerHTML= `${values}/${charCount}`
}
// function bgcolorchange (){
//    heading.style.color = '#' + Math.floor(Math.random()*16777215).toString(16)
// }

button.addEventListener("click", bgcolorchange)