const express = require("express");
const app = express();

// Router handle
app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hi there, you ara logined",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
