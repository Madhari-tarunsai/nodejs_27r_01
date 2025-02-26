const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(500, "ok", { "content-type": "application/json" });
    res.write("data not inserted");
    res.end("");
  } else if (req.method == "POST") {
    let inputdata = "";

    req.on("data", (chunk) => {
      inputdata += chunk.toString();
    });

    req.on("end", () => {
      let obj = { colour: "blue" };

      let existdata = JSON.parse(inputdata); // Parse input data
      existdata.colour = obj.colour; // Add colour property to the same object

      fs.writeFile("./dum.txt", JSON.stringify(existdata), (err) => {
        if (err) {
          res.writeHead(500, "ok", { "content-type": "application/json" });
          res.write("data not inserted");
          res.end("");
        } else {
          res.writeHead(200, "ok", { "content-type": "application/json" });
          console.log(existdata)
          res.write("data is inserted into the dum.txt file");
          res.end("");
        }
      });
    });
  }
});

server.listen("6789", () => {
  console.log("server is running");
});
