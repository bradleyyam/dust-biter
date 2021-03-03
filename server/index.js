const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.port;
const host = process.env.host;
const bodyParser = require("body-parser"); //use to parse incoming request bodies
 
const urlServices = require("./services/urlServices");
const urlDb = require("./data/urlDb");
const cache = require("./services/cache");
 
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.listen(port, () => console.log("listening port " + port));

app.post("/url", async (req, res) => {
    try {
        if (!!urlServices.validateUrl(req.body.url))
            return res.status(400).send({ msg: "Invalid URL." });

        const urlKey = urlServices.generateUrlKey();
        const shortUrl = `http://${host}:${port}/${urlKey}`

        await urlDb.save(req.body.url, shortUrl, urlKey)
        return res.status(200).send({ shortUrl });

    } catch (error) {
        return res.status(500).send({ msg: `Something went wrong. Please try again. ${error}` });
    }
});

app.get("/:shortUrlId", cache.cacheMiddleware(300), async (req, res) => {
    try {
        const url = await urlDb.find(req.params.shortUrlId);
        cache.saveCache(300, req, url.longURL)
        return !url ? res.status(404).send("Not found") : res.redirect(301, url.longURL)

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong. Please try again.")
    }
});