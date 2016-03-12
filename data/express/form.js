var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var parser=bodyParser.urlencoded({extended:false});

app.post('/form',parser,function(req,res){
    var body=req.body.str.split('').reverse().join('');
    res.end(body);
});
app.listen(process.argv[2]);