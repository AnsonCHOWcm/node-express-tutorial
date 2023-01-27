const {readFile, writeFile} = require('fs')

//async function would have additional callback function as attribute

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

//similar operations as 10-fs-modules.js


readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err, result)=>{
        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile('./content/result-aync',
                  `This is the result ${first}, ${second}`,
                  (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                  })
    })
})

