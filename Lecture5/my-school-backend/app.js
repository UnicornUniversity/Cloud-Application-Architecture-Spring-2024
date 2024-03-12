const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//for your reference if you submit FormData (key-value dictionary)
//app.use(bodyParser.urlencoded({extended: true}));

app.get("/health", (req, res, next) =>{
    res.send("<h1>Service is OK!</h1>");
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());

app.use("/classes", require("./routes/classes"));
app.use("/subjects", require("./routes/subjects"));
app.use("/students", require("./routes/students"));
app.use("/grades", require("./routes/grades"));

app.listen(3001);