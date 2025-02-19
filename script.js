const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("oka chances estava ")
    res.end("coding malli pratices chesukunta")
});
server.listen("3001",()=>{console.log("server running")})