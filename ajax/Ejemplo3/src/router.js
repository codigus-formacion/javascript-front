import express from "express";

const router = express.Router();
export default router;

router.get("/", (req, res) => {
  res.render("index", {
    name: "World",
  });
});

router.post("/textToUppercase", (req, res) => {
  let textData = req.body;

  console.log(textData);

  let text = textData.text;

  let response = {
    text: text,
    textUppercase: text.toUpperCase(),
  };

  res.json(response);
});
