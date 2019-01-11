const express=require("express");
const app=express();
const port=9797;
app.use(express.static("public"));
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/navbar.html");
})

app.listen(port,(err)=>{
if(err) console.log(err);
else console.log(`app is running on ${port}`);

})