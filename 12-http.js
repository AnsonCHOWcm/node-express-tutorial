const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req)
    if (req.url === '/'){
        res.end("Welcome to the Home Page")
    }else if (req.url === '/history'){
        res.end("This is the history")
    }else{
        res.end(
            `<h1>Oops!</h1>
            <n2>404 Not Found</h2>
            <a href="/">back home</a>`
        )
    }
})

server.listen(5000)