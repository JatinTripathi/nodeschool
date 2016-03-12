var http=require('http');
var url=require('url');

function parseTime(cal){
     var hour=cal.getHours();
     var min=cal.getMinutes();
     var sec=cal.getSeconds();
     return{
         "hour":hour,
         "minute":min,
         "second":sec
     };
}

function unixTime(cal){
       var time=cal.getTime();
       return{
           "unixtime":time
       };
}

http.createServer(function(req,res){
    
    var purl=url.parse(req.url,true);
    var cal=new Date(purl.query.iso);
    var result;
    
    if(purl.pathname==='/api/parsetime'){
     result=parseTime(cal);
    }
    
    else if(purl.pathname==='/api/unixtime'){
       result=unixTime(cal);
    }
    
    if(result){
       res.writeHead(200,{'Content-Type':'application/json'});
       res.write(JSON.stringify(result)); 
    }
    
}).listen(process.argv[2]);