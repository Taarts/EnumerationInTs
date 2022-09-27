import './style.css'

console.clear()

const colors = ['red', 'green', 'blue']
const numbers = [10, 20, 30]
// -----introducing "map"
// MAP is exactly like "Select" in C#

// function logSomeColor(color: string, index: number) {
//   const lengthOfColor = color.length
// }

// const lengths: number[] = []

const lengths = colors.map(function (color: string): number {
  return color.length
})
const uppercased = colors.map(function (color) {
  return color.toUpperCase()
})
const doubled = numbers.map(function (someNumber: number): string {
  return `the number doubled is ${someNumber * 2}`
})

console.log(doubled)
console.log(lengths)
console.log(uppercased)

const myHobbies = {
  pandas: {
    title: 'Panda Bears',
    description:
      'Pandas are bears native to south-central China, and are objectively the cutest animals on earth.',
  },
  miniatures: {
    title: 'Miniature Painting',
    description:
      "I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work.",
  },
}
const answer = Object.entries(myHobbies).map(
  ([key, value]) => `${key} - ${value.title} ${value.description}`
)
console.log(answer)
