var express=require('express');
var crypto=require('crypto');
var app=express();

app.put('/message/:NAME',function(req,res){
    var hash=crypto.createHash('sha1')
    .update(new Date().toDateString()+req.params.NAME)
    .digest('hex');
    res.send(hash);
});
app.listen(process.argv[2]);