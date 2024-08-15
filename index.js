const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/template"));


app.listen(port,() => {
    console.log("Server is on port " + port);
})