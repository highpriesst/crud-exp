const express = require("express");
const app = express();

app.listen("3001", () => {
  console.log("Running on 3001");
});

app.get("/", (req, res) => {
  res.json({ message: "it's working" });
});
