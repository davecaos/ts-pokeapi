import http from "http";
import express, { Application } from "express";
const routes = require("./routes");
// Create a new express app instance

const app: Application = express();
const server = http.createServer(app);

app.use("/", routes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});


app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
