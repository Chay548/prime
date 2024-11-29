const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,re)=>{
  res.send("one");
}):
app.listen(port,()=>{
  console.log("app listening on 3000");
});
