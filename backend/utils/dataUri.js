/* import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  const extName = path.extname(file.originalname); // e.g., ".jpg"
  return parser.format(extName, file.buffer); // returns { content, mimetype, base64 }
};

export default getDataUri; */
// utils/dataUri.js
import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  const extName = path.extname(file.originalname); // e.g. ".png", ".jpg"
  return parser.format(extName, file.buffer); // returns { content, mimetype, base64 }
};

export default getDataUri;