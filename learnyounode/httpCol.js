var http=require("http");
var chunck='';

http.get(process.argv[2],function(response){
    response.setEncoding("utf8");
    response.on("error",function(error){console.log("error");});
    response.on("data",function(data){chunck+=data;});
    response.on("end",function(){
        console.log(chunck.length);
        console.log(chunck);
    });
});