const Url = require("../models/orm");

const save = (longURL, shortURL, shortUrlId) => {
    Url.sync({ force: true }).then(() => {
        // Now the `urls` table in the database corresponds to the model definition
        return Url.create({shortUrlId: shortUrlId, longURL: longURL, shortURL: shortURL}).then(url => {
            console.log("Saving longURL:", url.longURL);
        });
      });
    
}

const find = (shortUrlId) => {
    return Url.findOne({where : {shortUrlId: shortUrlId}}).then(url => {
        console.log("Returning longURL:", url.longURL);
        return url
    });
}

module.exports = {
    save,
    find
}