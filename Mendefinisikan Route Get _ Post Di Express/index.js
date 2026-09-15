const express = require("express");
const app = express();

// Parse data form HTML (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.get("/order", (req, res) => {
  res.send("GET order response");
});

app.post("/order", (req, res) => {
  console.log(req.body); // data dari form POST tersedia di req.body
  res.send("POST order response");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
