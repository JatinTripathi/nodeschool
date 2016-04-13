var split=require('split');
var through=require('through2');

var stream=through(write,end);

function write(buffer,encoded,next){
    process.stdin.pipe()
}