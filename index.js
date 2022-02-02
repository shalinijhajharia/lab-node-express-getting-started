//http server setup

var http=require('http');
http.createServer((req,res)=>{
    res.write("this is http server");
    res.end();
}).listen(5000,()=>console.log("running on port 5000 "));

//express

const express=require('express')
const app=express()
app.get('/home',function(req,res){
    res.send('welcome page')
})
app.listen(6000,()=>console.log("server running on 5000"));
