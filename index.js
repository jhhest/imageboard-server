const express = require("express");
const db = require("./db");
const Image = require("./image/model")
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("<h1>Imageboard Server</h1>"));

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`
/**
 * Imageboard server listening on port ${port}! 
 **/
`)
);
// app.listen(port, () =>
//   console.log(`
// /**
//  * Server imageboard listens to port ${port}
//  * /e
// `)
// );
// Inside an index.js file:
// Import express.
// Create a new express server named app.
// Declare a constant port equal to process.env.PORT or 4000.
// Pass the port and a logging function to app.listen.
