require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Node Js app is running at the port ${port}`);
});
app.get("/da", (req, res) => {
  setTimeout(function () {
    throw new Error("We crashed!!!!!");
  }, 10);
});
