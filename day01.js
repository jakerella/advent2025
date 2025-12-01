const fs = require('fs')

const lines = fs.readFileSync('./day01_input.txt').toString().split('\n')

let p1 = 0
let p2 = 0
let pos = 50
lines.forEach(line => {
    const dir = line[0]
    const count = Number(line.substring(1)) % 100
    p2 += Math.floor(Number(line.substring(1)) / 100)
    if (dir === 'R') {
        if (pos+count > 99) { p2++ }
        pos = (pos+count > 99) ? pos+count-100 : pos+count
    } else {
        if (pos > 0 && pos-count < 1) { p2++ }
        pos = (pos-count < 0) ? pos-count+100 : pos-count
    }
    if (pos === 0) { p1++; }
})

console.log('Day 01, Part 01:', p1)
console.log('Day 01, Part 02:', p2)
