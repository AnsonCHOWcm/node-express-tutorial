const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')

writeFileSync(
    './content/res.txt',
    `Here is the result : ${first}, ${second}`,
)

