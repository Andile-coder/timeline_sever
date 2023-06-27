const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3001;

//database connection
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

//routes
const eventRoutes = require("./routes/eventRoutes");
const timelineRoutes = require("./routes/timelineRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api/events", eventRoutes);
app.use("/api/timelines", timelineRoutes);
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
