const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

exports.getImage = async (req, res) => {
  const imagePath = path.join(
    __dirname,
    "..",
    "public",
    "images",
    req.params[0]
  );
  const quality = parseInt(req.query.quality) || 80;
  const width = parseInt(req.query.width) || null;

  try {
    const data = fs.readFileSync(imagePath);
    const output = await sharp(data).resize(width).jpeg({ quality }).toBuffer();
    res.set("Cache-Control", "public, max-age=7200");
    res.type("jpeg").send(output);
  } catch (error) {
    res.status(404).send("Image not found");
  }
};
