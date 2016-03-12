var fs=require('fs');
var ary,a,str;
function count(callback){
    fs.readFile(process.argv[2],function doneReading(err,data){
        str=data.toString();
        ary=str.split('\n');
        a=ary.length;
        a--;
        callback();
    });
}

function print(){
    console.log(a);
}

count(print);