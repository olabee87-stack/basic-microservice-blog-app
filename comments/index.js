const express = require("express");
const app = express();
const connectDB = require("./database/db");
connectDB();

const routes = require("./routes/commentsRoutes");

const PORT = 3002;

app.use(express.json());
app.use("/comments", routes);

//@Port
app.listen(PORT, () => {
  console.log(`COMMENTS Server started on port ${PORT}`);
});
