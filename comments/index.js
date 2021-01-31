const express = require("express");
const cors = require("cors");

const app = express();
const connectDB = require("./database/db");
connectDB();

const routes = require("./routes/commentsRoutes");

const PORT = 3002;

app.use(express.json());
app.use(cors());
app.use("/comments", routes);

//@Port
app.listen(PORT, () => {
  console.log(`COMMENTS Server started on port ${PORT}`);
});
