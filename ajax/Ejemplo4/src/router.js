import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/processUserData", (req, res) => {
  let { userName, userSurname } = req.body;

  let response = {
    userName: userName.toUpperCase(),
    userSurname: userSurname.toUpperCase(),
  };

  res.json(response);
});

export default router;
