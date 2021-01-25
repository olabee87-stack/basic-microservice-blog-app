const express = require("express");

const app = express();

const connectDB = require("./database/db");
connectDB();
const routes = require("./routes/postsRoutes");

const PORT = 3001;

app.use(express.json());
app.use("/posts", routes);

//@Port
app.listen(PORT, () => {
  console.log(`POSTS' Server started on port ${PORT} `);
});
