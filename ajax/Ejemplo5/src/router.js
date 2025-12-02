import express from "express";
import multer from "multer";

const router = express.Router();
export default router;

const upload = multer({ dest: "uploads/" });

let filename;

router.post("/upload_image", upload.single("image"), (req, res) => {
  let response = { valid: false, message: "" };

  if (req.file) {
    filename = req.file.filename;

    response.valid = true;
    response.message = `The image ${filename} has been uploaded`;
  } else {
    response.message = "File not found!";
  }

  res.json(response);
});

router.get("/view_image", (req, res) => {
  res.render("view_image", { filename });
});

router.get("/download_image", (req, res) => {
  res.download("uploads/" + filename);
});

