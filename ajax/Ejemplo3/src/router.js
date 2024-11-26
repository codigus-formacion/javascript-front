import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    name: "World",
  });
});

router.post("/textToUppercase", (req, res) => {
  let text = req.body.text;

  let response = {
    text: text,
    textUppercase: text.toUpperCase(),
  };

  res.json(response);
});

export default router;
