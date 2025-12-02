import express from "express";
import multer from "multer";
import fs from "node:fs/promises";

import * as board from "./board.js";

const UPLOADS_FOLDER = "uploads";
const DEMO_FOLDER = "demo";

//Copy demo images to upload folder
fs.cp(DEMO_FOLDER + "/post0_image.jpeg", UPLOADS_FOLDER + "/post0_image.jpeg");
fs.cp(DEMO_FOLDER + "/post1_image.jpeg", UPLOADS_FOLDER + "/post1_image.jpeg");

board.addPost({
  user: "Pepe",
  title: "Vendo moto",
  text: "Barata, barata",
  imageFilename: "post0_image.jpeg",
});

board.addPost({
  user: "Juan",
  title: "Compro coche",
  text: "Pago bien",
  imageFilename: "post1_image.jpeg",
});

const router = express.Router();
export default router;

const upload = multer({ dest: UPLOADS_FOLDER });

router.get("/", (req, res) => {
  res.render("index", {
    posts: board.getPosts(),
  });
});

router.post("/post/new", upload.single("image"), (req, res) => {
  let { user, title, text } = req.body;

  let imageFilename = req.file.filename;

  let post = board.addPost({ user, title, text, imageFilename });

  res.json(post);
});

router.get("/post/:id", (req, res) => {
  let post = board.getPost(req.params.id);

  res.render("show_post", { post });
});

router.get("/post/:id/delete", (req, res) => {
  let post = board.deletePost(req.params.id);

  if (post) {
    //Delete image.
    //It should be improved processing possible errors
    fs.unlink(UPLOADS_FOLDER + "/" + post.imageFilename);
  }

  res.json(post);
});

router.get("/post/:id/image", (req, res) => {
  let post = board.getPost(req.params.id);

  res.download(UPLOADS_FOLDER + "/" + post.imageFilename);
});

