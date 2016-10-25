const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        apiKey, 
        query,
        limit,
        offset,
        rating,
        lang,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !query) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    request({ 
        method: 'GET',
        url: 'http://api.giphy.com/v1/stickers/search',
        qs: lib.clearArgs({
            q: query,
            limit,
            offset,
            rating,
            lang,
            api_key: apiKey  
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
