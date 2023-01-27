const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


//Async function with callback

readFile('./content/first/txt', 'utf-8', (err, data) => {
    if (err) {
        return 
    } else {
        console.log(data)
    }
})

//Using Promise may better structure the callbackchain

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile('./content/first.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

//Managing CallBack Chain

getText('./content/first.txt')
.then(res => console.log(res))
.catch(err => console.log(err))

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise(
            './content/promise-res-async.txt',
            `This is Good. ${first} ${first}`
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()