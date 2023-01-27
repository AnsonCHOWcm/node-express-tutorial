const path = require('path')

console.log(path.sep)
const filePath = path.join('/content/', 'subfolder', 'test.txt')

const base = path.basename(filePath)
console.log(base)

console.log(__dirname)

const absolute = path.resolve(__dirname,'README.md')
console.log(absolute)