import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/processUserData", upload.none(), (req, res) => {
  let { userName, userSurname } = req.body;

  let response = {
    userName: userName.toUpperCase(),
    userSurname: userSurname.toUpperCase(),
  };

  res.json(response);
});

export default router;
