// Express server
const express = require("express");
const app = express();
const port = 5000;

const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
