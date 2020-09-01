const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("TREMBLE!");
  console.log("someone is here".red);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({ message: error });
    });
});

router.get("/tackle", (req, res) => {
  res.send("TACKLE!");
  console.log("TACKLE HEADBUTT");
});

module.exports = router;
