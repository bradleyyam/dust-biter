const cache = require('memory-cache');
const mcache = new cache.Cache();

const cacheMiddleware = (duration) => {
    return (req, res, next) => {
        var key = '__cache__' + req.url || req.originalUrl
        var cached = mcache.get(key)
        if (cached) {
            res.redirect(301, cached)
            return
        } else {
            next();
        }
    }
}

const saveCache = (duration, req, longURL) => {
    var key = '__cache__' + req.url || req.originalUrl
    mcache.put(key, longURL, duration*1000);
}

module.exports = { cacheMiddleware, saveCache }; 