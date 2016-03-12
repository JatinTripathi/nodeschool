module.exports=function(fileRead,ext,callback){     
     var fs=require('fs');
     var path=require('path');
     var a=".";
     var b=a.concat(ext);
     var ary=[];
      
     fs.readdir(fileRead,function doneReading(err,files){
       if(err){return callback(err,null);}
       files.forEach(function (element,index){
       if(path.extname(element)===b){ary.push(element);}
       });
       callback(null,ary);
     });
};