// ✅
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");


require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books",{
  useNewUrlParser: true,
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});