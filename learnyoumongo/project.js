var mongo=require('mongodb').MongoClient;
var ages=process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err) throw err;
    db.collection('parrots').find({age:{$gt:+ages}},{name:1,age:1,_id:0})
    .toArray(function(err,docs){
        if(err) throw err;
        console.log(docs);
        db.close();
    });
});