var modular=require('./modular.js');

modular(process.argv[2],process.argv[3],function letsPrint(err,data){
    if(err){console.log("error");}
    data.forEach(print);
});

function print(element,index,array){
    console.log(element);
}