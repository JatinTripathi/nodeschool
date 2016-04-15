var through=require('through2');
var http=require('http');
var stream=through(write,end);

function write(buf,enc,next){
    var ts=buf.toString().toUpperCase();
    this.push(ts);
    next();
}

function end(done){
    done();
}

var server=http.createServer(function(req,res){
    if(req.method==='POST'){
        req.pipe(stream).pipe(res);
    }
});
server.listen(process.argv[2]);