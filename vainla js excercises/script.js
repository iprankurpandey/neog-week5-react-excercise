const input1 = document.querySelector('#input1')
console.log(input1.value)
const input2 = document.querySelector('#input2')
console.log(input2.value) 
const head = document.querySelector('#h3')
const btn = document.querySelector('#btn')
let Alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


const compareValid =()=> {
    if (input1.value.length === input2.value.length)
    {
        input1.includes(Alphabets)
        head.innerHTML = 'The two inputs are equal'
        btn.disabled = false
    }
    else {
        head.innerHTML = 'The two inputs are not equal'
        btn.disabled = true
    }
}
    

btn.addEventListener('click',compareValid)