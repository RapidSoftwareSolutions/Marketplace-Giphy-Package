const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        apiKey, 
        limit,
        rating,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        callback('Fill in required fields.', res, {to}, ['apiKey']);
        return;
    }

    request({ 
        method: 'GET',
        url: 'http://api.giphy.com/v1/stickers/trending',
        qs: lib.clearArgs({
            limit,
            rating,
            api_key: apiKey  
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
