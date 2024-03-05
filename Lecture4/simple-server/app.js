const http = require("http");

const mapyCzApiKey = "bfIE-eF79D-1vG9j5I9JPEj0r-LS3v-EgqFNPRgTb9Y";

async function executeGeocoding(apiKey, address){
    let errorString = "";
    const places = [];
    const url = "https://api.mapy.cz/v1/geocode?query=" + address + "&apikey=" + apiKey;
    console.log("url=" + url);
    await fetch(url,
        {
            method: "GET"
        }
    ).then((res) => res.json()).then((parsedJson) => {
        console.log(parsedJson)
        for(let i = 0; i < parsedJson.items.length; i++){
            const item = parsedJson.items[i];
            places.push({"name" : item.name, "position": item.position});
        }
    }, (reason) => {
        console.log("reason=" + reason);
        errorString = reason.message;
    });

    return JSON.stringify({"places": places, "errorString": errorString});
}

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
        }else if (req.url === "/map" && req.method === "POST") {
            console.log("This is MAP");
            const allPieces = [];
            let jsonOutput = "";
            req.on("data", (piece) => {
                allPieces.push(piece);
            });
            req.on("end", async () => {
                    res.setHeader("Content-Type", "application/json");
                    let jsonState = {errorString: ""};
                    try {
                        const body = Buffer.concat(allPieces);
                        const customer = JSON.parse(body.toString());
                        console.log("address: " + customer.address);
                        await executeGeocoding(mapyCzApiKey, customer.address).then((output) => jsonOutput = output);
                    } catch (error) {
                        console.log(error);
                        jsonState = {errorString: error.message};
                    }
                    //const jsonOutput = JSON.stringify({...jsonState, ...jsonCoords});
                    console.log("JSON OUTPUT: " + jsonOutput);
                    return res.end(jsonOutput);
                }
            );
        }
    }
);

server.listen(3001);