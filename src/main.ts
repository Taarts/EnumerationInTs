import './style.css'

console.clear()

const colors = ['red', 'green', 'blue']
const lengths: number[] = []

function logSomeColor(color: string, index: number) {
  const lengthOfColor = color.length

  lengths.push(lengthOfColor)
  console.log(`The color at position ${index} is ${color}`)
}
colors.forEach(logSomeColor)
console.log(lengths)
