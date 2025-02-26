const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("data not inserted");
    } else if (req.method === "POST") {
        let indata = "";

        req.on("data", (chunk) => {
            indata += chunk.toString();
        });

        req.on("end", () => {
            fs.appendFile("./tar.txt", indata, (err) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error writing data");
                } else {
                    res.writeHead(200, { "Content-Type": "application/json" });
        
                    res.end("data inserted");
                }
            });
        });
    }
});

server.listen(4589, () => {
    console.log("Server running on port 8730");
});
