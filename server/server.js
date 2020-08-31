const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

require("dotenv").config({
  path: "./config/index.env",
});
const connectDB = require("./config/db");
connectDB();

app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/user/", require("./routes/auth.route"));

app.use(express.urlencoded({ extended: true }));
app.use(cors("dev"));
app.use(morgan());

app.get("/", (req, res) => {
  res.send("send");
});

app.use((req, res) => {
  res.status(404).json({
    msg: "Page not found",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
