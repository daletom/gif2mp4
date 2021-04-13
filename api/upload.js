require('dotenv').config()
const ImgixAPI = require("imgix-management-js");

const imgix = new ImgixAPI({
    apiKey: process.env.IMGIX_API_KEY
});

module.exports = async (req,res) => {
    let uploadableFile = req.body.gif.replace(/^data:image\/gif;base64,|^data:image\/jpeg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, '');
    let buffer = Buffer.from(uploadableFile, "base64");
    console.log(req.body.name);
    await imgix.request(`sources/upload/${process.env.IMGIX_SOURCE_ID}/${req.body.name}`, {
        method: 'POST',
        body: buffer
    })
    .then(response => console.log(JSON.stringify(response, null, 2)));
    res.json({
        body: 200
    })
}