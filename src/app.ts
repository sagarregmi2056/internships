import express from 'express';
const app = express();

app.use(express.json());
const port = 3000;

app.get('/',function(req,res){

    res.send("hello from app.ts file")
})


app.listen(port,()=>{
    console.log(`started server at port ${port}.`)
});