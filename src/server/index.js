const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')
var path = require('path');
const PORT = 8088
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const app = express()
const fetch = require("node-fetch")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("dist")) 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});

app.post('/addurl', async function (req, res) {

    console.log('POST request received');
    let key = process.env.API_KEY;
//     res.sendFile('dist/index.html')
//    res.sendFile(path.resolve('src/client/views/index.html'))
    let url = req.body.urltext;
    console.log(`the url is ${url}`);
    console.log(key);
    let url_to_be_sent = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`


    const response = await fetch(url_to_be_sent)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    res.send(jsonResponse)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`The Server is listening on port ${PORT}!`)
})

module.exports=app;
