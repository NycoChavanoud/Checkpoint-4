import base from "../../../middlewares/common";
import handleFileUpload from "../../../middlewares/handleFileUpload";

async function postFilesInDb(req, res) {
  try {
    const data = req.file;
    data.path = data.path.replace("public/", "");
    res.status(201).send(data);
  } catch {
    res.status(500).send("file can't be uploaded");
  }
}

export default base().post(handleFileUpload.single("file"), postFilesInDb);

export const config = {
  api: {
    bodyParser: false,
  },
};
