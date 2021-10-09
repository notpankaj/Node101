const http  = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write('Welcome to my home page');
        res.end()
    }
    
    if(req.url === '/about'){
        res.write('<h1>Welcome to my about page</h1>');
        res.end()
    } 

    if(req.url === '/hotshot'){
        res.end('<h1>BE A HOTSHOT</h1><br><a href="/">GO Home</a>');
    }

})

server.listen('5000');



