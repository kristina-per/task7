const numbers = [3, 7, 12, 5, 8]


const Square = numbers.map(num => num * num) 
console.log(Square)

const evens = numbers.filter(num => num %2 === 0)
console.log (evens)

const number = numbers.reduce((acc,  num) => acc + num, 0)
console.log (number)

const checkNumbers = 20
if (checkNumbers > 10 & checkNumbers % 2 === 0 ) {
    console.log ('true') }
else { console.log ('fals')}

     

