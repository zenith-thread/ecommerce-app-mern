import multer from "multer";

export const storage = multer.diskStorage({
  // (A) destination: where to save the file on disk
  // can be a string or a function(req, file, cb)
  // destination: "/tmp/my-uploads",

  // (B) filename: what to name each saved file
  filename: (req, file, callback) => {
    // file.originalname = the name of the file on the uploader’s computer
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
