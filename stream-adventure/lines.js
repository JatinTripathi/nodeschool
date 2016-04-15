var split=require('split');
var through=require('through2');
var a=true;

process.stdin.
    pipe(split()).
    pipe(through(function(line,_,next){
        if(a){
            var ts=line.toString().toLowerCase();
            this.push(ts+'\n');
            a=false;
            next();
        }
        else if(!a){
            var ts=line.toString().toUpperCase();
            this.push(ts+'\n');
            a=true;
            next();
        }
})).pipe(process.stdout);