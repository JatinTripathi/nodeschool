var fs=require('fs');
var path=require('path');
var a=".";
var b=a.concat(process.argv[3]);

fs.readdir(process.argv[2],function doneReading(err,file){
    if(err){console.log(err);}
    file.forEach(print);
});

function print(element,index,array){
    if(path.extname(element)===b){
        console.log(element);
    }
}