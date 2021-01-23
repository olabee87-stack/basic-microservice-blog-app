const express = require("express");

const app = express();

const PORT = 3002;

//@Port
app.listen(PORT, () => {
  console.log(`COMMENTS Server started on port ${PORT}`);
});
