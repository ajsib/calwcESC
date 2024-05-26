const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;

exports.getImage = async (req, res) => {
  const imagePath = path.join(__dirname, "..", "public", "images", req.params[0]);
  const quality = parseInt(req.query.quality) || 80;
  const width = parseInt(req.query.width) || null;

  try {
    const data = await fs.readFile(imagePath);
    const image = sharp(data);
    const metadata = await image.metadata();

    let output;
    if (metadata.format === "png") {
      if (width) {
        output = await image.resize(width).png({ quality, force: true }).toBuffer();
      } else {
        output = await image.png({ quality, force: true }).toBuffer();
      }
    } else {
      if (width) {
        output = await image.resize(width).jpeg({ quality }).toBuffer();
      } else {
        output = await image.jpeg({ quality }).toBuffer();
      }
    }

    res.set("Cache-Control", "public, max-age=7200");
    res.type(metadata.format).send(output);
  } catch (error) {
    res.status(404).send("Image not found");
  }
};
