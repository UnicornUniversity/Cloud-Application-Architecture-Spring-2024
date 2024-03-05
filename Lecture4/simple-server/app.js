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
            const allPieces = [];
            req.on("data", (piece) => {
                allPieces.push(piece);
                console.log(piece);
            });
            req.on("end", () => {
                    console.log("-- all data loaded --");
                    res.setHeader("Content-Type", "application/json");
                    let jsonState = {errorString: ""};
                    let jsonHello = {};
                    try {
                        const body = Buffer.concat(allPieces);
                        console.log("body: " + body);
                        const customer = JSON.parse(body.toString());
                        console.log("name: " + customer.name);
                        console.log("address: " + customer.address);
                        jsonHello = {hello: "Hello, " + customer.name + "! Your address is " + customer.address};
                    } catch (error) {
                        console.log(error);
                        jsonState = {errorString: error.message};
                    }
                    const jsonOutput = JSON.stringify({...jsonState, ...jsonHello});
                    console.log("JSON OUTPUT: " + jsonOutput);
                    return res.end(jsonOutput);
                }
            );
        }
    }
);

server.listen(3001);