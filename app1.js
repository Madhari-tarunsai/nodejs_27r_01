const http=require("http")
let fs=require("fs");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
   if(req.method=="GET"){
    res.writeHead(500,"ok",{"content-type":"application/json"})
    res.write("data not inserted to read the content please wait....")
    res.end("")
   }
   else if(req.method=="POST"){
    fs.readFile("./data.json","utf8",(err,data)=>{
        if(err){
            res.writeHead(500,"ok",{"content-type":"application/json"})
            res.write("data not inserted to read the content please wait....")
            res.end("")

        }
        else{
            res.writeHead(200,"ok",{"content-type":"application/json"})
            console.log(JSON.parse(data))
            res.write(data)
            res.end("")

        }
    })
   }

});
server.listen("2567",()=>{
    console.log("server runing")
})