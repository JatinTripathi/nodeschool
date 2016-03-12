var http=require('http');
var result=[];
var urls=process.argv.slice(2);
var i,j='0';
var url='0';

for(i=0;i<urls.length;i++){
   (function(i){
      http.get(urls[i],function(res){
         var chunck='';
         res.setEncoding('utf8');
         res.on("error",function(error){console.log("error");});
         res.on("data",function(data){chunck+=data;});
         res.on("end",function(){
            result[i]=chunck;
            url=0;
            for(j=0;j<result.length;j++){
               if(result[j]!=null){url++;}
            }
            if(url==result.length){
               for(j=0;j<result.length;j++){
                  console.log(result[j]);
               }            
            }
         });
      }); 
   })(i);
}