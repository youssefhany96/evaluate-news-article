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
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client'))) 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});

let key = process.env.API_KEY;
app.post('/addurl', async function (req, res) {

//     res.sendFile('dist/index.html')
//    res.sendFile(path.resolve('src/client/views/index.html'))
    var url = req.body.urltext;
    console.log(`the url is ${url}`);

    let url_to_be_sent = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&&url=${url}&lang=en`

    const response = await axios(url_to_be_sent)
    console.log(response)
    res.send(response)
})

// a route that handling post request for new URL that coming from the frontend
/* TODO:

    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`The Server is listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
