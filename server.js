var express=require('express');
var app=express();
var port=process.env.PORT||8888;
app.listen(port,console.log('server is running at :',port));
app.use(express.static('src'));
app.get('/',(req,res)=>{
  res.send(index.html);
});
