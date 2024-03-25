const express = require("express");
const posts = require("../Modals/postsModals");

const router = express.Router();

//save posts

router.post("/post/save", async (req, res) => {
  let newPost = new posts(req.body);

  try {
    await newPost.save();
    return res.status(200).json({ success: "post save successful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//get post
router.get("/post", async (req, res) => {
  try {
    const existingPosts = await posts.find();
    return res.status(200).json({ success: true, existingPosts });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//update post
router.put("/post/update/:id", async (req, res) => {
  try {
    await posts.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.status(200).json({ success: "post update successful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//deleted post
router.delete("/post/delete/:id", async (req, res) => {
  try {
    await posts.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: "post deleted successful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//get a one post

router.get("/post/:id", async (req, res) => {
  try {
    const onePost = await posts.findById(req.params.id);
    return res.status(200).json({ onePost });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
