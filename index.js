const express = require("express");
const routes = require("./routes/index");
const connectDB = require("./config/db");

const app = express();

//json
app.use(express.json());

//urlencoded
app.use(express.urlencoded({ extended: true }));

//connect to db
connectDB();

//routes
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
