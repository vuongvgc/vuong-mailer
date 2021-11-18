const express = require("express");
const app = express();

// Router handle
app.get("/", (req, res) => {
  res.send({
    hi: "Hi there",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
