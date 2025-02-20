// const http = require("http");
// let obj = { veg: "gobi", quntity: "2", price: "120/-" };
// let obj1 = { non_veg: "chicken", quntity: "2", price: "190/-" };
// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     if (req.url == "/home") {
//       res.writeHead(201, "response correct", {
//         "content-type": "application/json",
//       });
//       res.write(JSON.stringify(obj));
//       res.end();
//     } else if (req.url == "/about") {
//       res.writeHead(201, "response correct", {
//         "content-type": "application/json",
//       });
//       res.write(JSON.stringify(obj1));
//       res.end();
//     } else {
//       res.writeHead(404, "error", { "content-type": "application/json" });
//       res.write("not found");
//       res.end();
//     }
//   } else {
//     res.writeHead(404, "error", { "content-type": "application/json" });
//     res.write("not found");
//     res.end();
//   }
// });
// server.listen("3003", () => {
//   console.log("server runing");
// });



let http = require("http");

let server = http.createServer((req, res) => {
    if (req.method == "GET") {
        if (req.url == "/veg") {
            res.writeHead(200, "OK", { "content-type": "application/json" });
            res.write(JSON.stringify({ veg: "gobi",qunity:"2" }));
            res.end();
        } else if (req.url == "/non_veg") {
            res.writeHead(200, "OK", { "content-type": "application/json" });
            res.write(JSON.stringify({ non_veg: "chicken",qunity:"2"  }));
            res.end();
        } else if (req.url == "/snacks") { // Corrected typo here
            res.writeHead(200, "OK", { "content-type": "application/json" });
            res.write(JSON.stringify({ biscuits: "parle-g",qunity:"2" })); // Corrected typo here
            res.end();
        } else {
            res.writeHead(404, "Not Found", { "content-type": "application/json" });
            res.write(JSON.stringify({ "error": "Item not found" })); // Send JSON error
            res.end();
        }
    } 
    else {
        res.writeHead(404, "Not Found", { "content-type": "application/json" });
        res.write(JSON.stringify({ "error": "Item not found" })); // Send JSON error
        res.end();
    }
});

server.listen(7000, () => {
    console.log("server_running")}); // Corrected typo here (optional but good practice)