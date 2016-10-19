const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        apiKey, 
        s,
        rating,
        lang,
        fmt,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    request({ 
        method: 'GET',
        url: 'http://api.giphy.com/v1/stickers/translate',
        qs: lib.clearArgs({
            s,
            rating,
            lang,
            fmt,
            api_key: apiKey  
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
