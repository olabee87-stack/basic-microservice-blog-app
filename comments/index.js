const express = require("express");
const app = express();
const connectDB = require("./database/db");
connectDB();

const PORT = 3002;

app.use(express.json());

//@Port
app.listen(PORT, () => {
  console.log(`COMMENTS Server started on port ${PORT}`);
});
