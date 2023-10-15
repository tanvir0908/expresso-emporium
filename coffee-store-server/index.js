const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.unsubscribe(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee making server is running");
});
app.listen(port, () => {
  console.log("Coffee server is running on port:", port);
});
