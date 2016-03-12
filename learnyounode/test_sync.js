var fs =require('fs');
var buf=fs.readFileSync(process.argv[2]);
var str=buf.toString();
var ary=str.split('\n');
var a=ary.length;
a--;
console.log(a);