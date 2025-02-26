// // // const http=require("http")
// // // const fs=require("fs")
// // // const server=http.createServer((req,res)=>{
// // //     if(req.method=="GET"){
// // //         fs.readFile("./form.json","utf8",(err,data)=>{
// // //             if(err){
// // //                 res.writeHead("404","error",{"content-type":"application/json"})
// // //                 res.write("data is not their")
// // //                 res.end("")
// // //             }
// // //             else{
// // //                 res.writeHead("202","ok",{"content-type":"application/json"})
// // //                 console.log(JSON.parse(data))
// // //                 res.write(data)
// // //                 res.end("")

// // //             }
// // //         })
// // //     }
// // // });
// // // server.listen("3456",()=>{
// // //     console.log("server is runing")
// // // })




// // const http=require("http")
// // const fs=require("fs")
// // const server=http.createServer((req,res)=>{
// //     if(req.method=="POST"){
// //         let inputdata={"id":5,"name":"kiran","place":"bubai"};
// //         fs.readFile("./form.json","utf8",(err,data)=>{
// //             if(err){
// //                 res.end("")
// //             }else{
// //                 let existing=JSON.parse(data)
// //                 existing.push(inputdata)
// //                 let updatedata=existing
// //                 fs.writeFile("./form.json",JSON.stringify(updatedata),(err)=>{
// //                     if(err){
// //                         res.end("")
// //                     }
// //                     else{
// //                         res.writeHead(202,"ok",{"content-type":"application/json"})
// //                         res.write("data updated")
// //                         res.end("")
// //                     }
// //                 })
// //             }

// //         })
// //     }
// // })
// // server.listen("3456",()=>{
// //         console.log("server is runing")
// //     })


// const http=require("http")
// const fs=require("fs")
// const server=http.createServer((req,res)=>{
//     if(req.method=="POST"){
//         let inputdata=""
//                 req.on("data",(chunk)=>{
//                     inputdata+=chunk.toString()
//                 })
               
//                 req.on("end",()=>{
//                     console.log(inputdata)
//                     fs.readFile("./form.json","utf8",(err,data)=>{
//                         if(err){
//                             res.end("")
//                         }
//                         else{
//                             let existdata=JSON.parse(data)
//                             existdata.push(JSON.parse(inputdata))
//                             let updatedata=existdata
//                             fs.writeFile("./form.json",JSON.stringify(updatedata),(err)=>{
//                                 if(err){
//                                     res.end("")
//                                 }
//                                 else{
//                                     res.write("data updated")
//                                     res.end()
//                                 }
//                             })
//                         }
//                     })
//                 })
//             }
        
       
// })
// server.listen("3456",()=>{
//             console.log("server is runing")
//          })