const num1 = [1,2,3]
const num2 = [4,5,6]
let num3 = num1.concat(num2)
console.log(num3)

//método concat()
num3 = num3.concat(...[7,8,9],'José')
console.log(num3)

// ... = rest = restante -> spread

const a4 = [...num1, 'Mateus',...num2,...[7,8,9]]
console.log(a4)