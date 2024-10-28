const axios = require("axios");
const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const FormData = require("form-data");

const PINATA_AIP_KEY = process.env.PINATA_AIP_KEY;
const PINATA_SECRECT_KEY = process.env.PINATA_SECRECT_KEY;

const generateFileName = (imageID) => {
  const date = new Date().toISOString().replace(/:/g, "-");
  return `${imageID}-${date}.png`;
};

const OPEN_AI = async (req, res, next) => {
  const { name, description, category, imageURL, imageID } = req.body;

  const fileName = generateFileName(imageID);
  const filePath = path.join(__dirname, "../..", "uploads", fileName);

  try {
    // Fetch the image from the provided URL
    const response = await axios({
      url: imageURL,
      responseType: "arraybuffer",
      maxRedirects: 5,
    });

    const imageBuffer = Buffer.from(response.data);

    // Process the image and save it locally
    await sharp(imageBuffer).png().toFile(filePath);

    // Read the file from the local path for uploading to Pinata
    const fileStream = fs.createReadStream(filePath);

    console.log(fileStream);

    // Upload the image to IPFS using the function
    const ipfsImageUrl = await UPLOAD_IPFS_IMAGE(fileStream);

    const data = JSON.stringify({
      name: name,
      description: description,
      category: category,
      image: ipfsImageUrl,
      size: 12345,
      type: "AI Generated",
      creator: imageID,
    });

    const _IPFS_URL = await UPLOAD_METADATA(data);

    // Send the IPFS URL as the response
    res.status(201).json({
      message: "Image created and uploaded to IPFS successfully!",
      ipfsImageUrl,
      imageID,
      _IPFS_URL,
    });
  } catch (error) {
    next(error);
  }
};

// Pinata IPFS upload function
const UPLOAD_IPFS_IMAGE = async (file) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: PINATA_AIP_KEY,
        pinata_secret_api_key: PINATA_SECRECT_KEY,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    const ipfsImageUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    return ipfsImageUrl;
  }
};

const UPLOAD_METADATA = async (data) => {
  const response = await axios({
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    data: data,
    headers: {
      pinata_api_key: PINATA_AIP_KEY,
      pinata_secret_api_key: PINATA_SECRECT_KEY,
      "Content-Type": "application/json",
    },
  });

  const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

  return url;
};

module.exports = { OPEN_AI };
