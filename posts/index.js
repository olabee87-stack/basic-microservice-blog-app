const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./database/db");
connectDB();
const routes = require("./routes/postsRoutes");

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use("/posts", routes);

//@Port
app.listen(PORT, () => {
  console.log(`POSTS' Server started on port ${PORT} `);
});
