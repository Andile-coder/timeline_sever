const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
//routes
const eventRoutes = require("./routes/eventRoutes");
const timelineRoutes = require("./routes/timelineRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const errorHandler = require("./middlewear/errorHandling");

app.use("/api/events", eventRoutes);
app.use("/api/timelines", timelineRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/", userRoutes);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
