// Import the Router class from express.
const { Router } = require("express");
// Import the Image model.
const Image = require("./model");
// Instantiate a router.
const router = new Router();
// Register a GET /image route that responds with all the images.
router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(result => res.json(result))
    .catch(error => next(error));
});
router.post("/image", (req, res) => {
  Image.create(req.body)
    .then(image => res.json(image))
    .catch(error => next(error));
});
// Create // make movie entry.
// Test with => http POST :3000/movie title="The best movie evahh" year=1984 synopsis="the best movie ever"
// app.post("/movie", (req, res, next) => {
//     Movie.create(req.body)
//       .then(movie => res.json(movie))
//       .catch(next);

// Export the router.
module.exports = router;
