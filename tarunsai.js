const http = require("http");
let fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    fs.readFile("./tarunsai.json","utf8",(err,data)=>{
        if(err){
            res.write(err)
            res.end("")
        }
        else{
            res.writeHead(202,"ok",{"content-type":"application/json"})
            res.write(data)
            res.end("")
        }
    })
  }})
server.listen("4530",()=>{
    console.log("server is runing ")
})
