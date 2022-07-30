const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log("Running on 3001");
});

app.get("/", (req, res) => {
  res.json({ message: "it's working" });
});
