const http = require("http");

const server
    = http.createServer((req, res) => {
        console.log(req.url);
        console.log(req.method);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === "OPTIONS") {
            return res.end();
        }

        if (req.url === "/health" && req.method === "GET") {
            res.setHeader("Content-Type", "text/html");
            res.write("<html>");
            res.write("<body><b>I am OK!</b></body>");
            res.write("</html>");
            return res.end();
        } else if (req.url === "/customer" && req.method === "POST") {
            console.log("We are in customer");


        }
    }
);

server.listen(3001);