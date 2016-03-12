var net=require('net');

function addup(x){
    if(x<10){return'0'+x;}
    else{return x;}
}

var calender=new Date();
    var year=calender.getFullYear();
    var month=addup(calender.getMonth()+1);
    var date=addup(calender.getDate());
    var hour=addup(calender.getHours());
    var min=addup(calender.getMinutes());
    


var server=net.createServer(function(socket){
    socket.end(year+'-'+month+'-'+date+' '+hour+':'+min+'\n');
});
server.listen(process.argv[2]);