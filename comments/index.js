const express = require("express");

const app = express();

const PORT = 3002;

//@Port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
