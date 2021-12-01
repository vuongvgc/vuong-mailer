const express = require("express");
const mongoose = require("mongoose");
const key = require("./config/keys");
const app = express();

require("./services/passport");
require("./routers/authRouter")(app);
mongoose.connect(key.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
