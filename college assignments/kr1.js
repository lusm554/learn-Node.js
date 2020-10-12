const a = 0.5 
const b = 3.1 
const x = 1.4

const Z = Math.sqrt(
  a * x * Math.sin(2 * x) + Math.pow(Math.E, (-2 * x)) * (x + b)
)

const W = Math.pow(Math.cos(x ** 3), 2) - x / Math.sqrt(a ** 2 + b ** 2)

console.log('Программа составлена ***\n')

console.log('Исходные данные')
console.log(`A = ${a}  B = ${b}  X = ${x}\n`)

console.log('* Результаты расчета *')
console.log(`Z = ${Z}\nW = ${W}`)