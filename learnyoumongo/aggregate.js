var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db){
   if(err) throw err;
   db.collection('prices').aggregate([
       {$match:{size:process.argv[2]}},
       {$group:{
          _id:'total',
           total:
       {$avg:'$price'}}}
   ]).toArray(function(err,result){
        if(err) throw err;
        console.log(Number(result[0].total).toFixed(2));
        db.close();
   });
});