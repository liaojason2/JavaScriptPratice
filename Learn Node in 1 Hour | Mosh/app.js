

const http = require('http');
const { Socket } = require('net');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
})

/* Make a HTTP server at port 3000
const server = http.createServer()

server.on('connection', (socket) => {
    console.log('New connection...');
});
*/

server.listen(3000);

console.log('Listening on port 3000');


/* events 
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
emitter.on("messageLogged", (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');
*/

/* fs (files and directories) module example
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
*/

/* OS module example
const os = require('os')=
totalMemory = os.totalmem
freeMemory = os.freemem

console.log(`Total Memory ${totalMemory}`)
console.log("Free Memory " + freeMemory)
*/


/* Path module example
const path = require('path')
var pathObj = path.parse(__filename);
console.log(pathObj)
*/

/* Call a function when module.exports = log;
log("message")
*/

/* Call a function when module.exports.url = url;
logger.log('message')
*/

/* function example
function sayHello(name) {
    console.log('Hello '+ name);
}
sayHello("Jason");
*/

/* Print module
console.log(module)
*/