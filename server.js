//https://www.youtube.com/watch?v=klEs4oi3Igc&t=2626s : 44min

const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(express.static("client/build"));

app.get("/api/youtube", (req, res) => {
  res.send({
    msg: "bonjours a toi",
  });
});

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`le serveur est lancer sur le port : ${PORT}`);
});
