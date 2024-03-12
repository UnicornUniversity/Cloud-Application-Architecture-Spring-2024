const express = require("express");
const app = express();

app.get("/health", (req, res, next) =>{
    res.send("<h1>Service is OK!</h1>");
});

/*
app.use((req, res, next) => {
    //TODO headers
});
*/
app.use("/classes", require("./routes/classes"));


app.listen(3001);