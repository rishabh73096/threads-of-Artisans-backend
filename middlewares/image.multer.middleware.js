import exp from "constants";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload_image = multer({
  storage: storage,
}).single("pic"); //input type=file name="pic"
export default upload_image;
