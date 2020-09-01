const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    console.log("someone is here".red);
  } catch (error) {
    res.json({ message: error });
  }
});

//submit post
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
  //   post
  //     .save()
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(error => {
  //       res.json({ message: error });
  //     });
});

router.get("/tackle", (req, res) => {
  res.send("TACKLE!");
  console.log("TACKLE HEADBUTT");
});

//get specific post

router.get("/:postId", async (req, res) => {
  try {
    console.log(req.params.postId);
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

//update

router.patch("/:postId", async (req, res) => {
  try {
    console.log(req.params.postId);
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete
router.delete("/:postId", async (req, res) => {
  try {
    const removedpost = await Post.remove({ _id: req.params.postId });
    res.json(removedpost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
