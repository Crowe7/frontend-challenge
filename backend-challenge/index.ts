const express = require('express');

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`running on port ${port}.`);
});