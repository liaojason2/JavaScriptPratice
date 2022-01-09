
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

/*
console.log(__filename)
console.log(__dirname)
*/
class Logger extends EventEmitter{
    log(message) {
        // Send am HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'}/*Event argument*/);
    }
}

module.exports = Logger;
//module.exports.url = url;

/* Module wrapper function
(function(exports, require, module, __filename, __dirname){
    // 我們寫的程式碼
})
*/