let input = "  javaScripts  "
let str = input.trim()
let output = `<div> ${str}</div>`

console.log(output)

document.querySelector('.redu').innerHTML += output

const number = [1,3,5,7,'gg']
const copy = ['damn', ...number]

console.log(number)
console.log(copy)
