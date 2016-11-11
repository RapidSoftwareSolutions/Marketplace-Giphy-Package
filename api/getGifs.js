const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        apiKey, 
        gifIds,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !gifIds) {
        callback('Fill in required fields.', res, {to}, ['apiKey', 'gifIds']);
        return;
    }

    request({ 
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs',
        qs: lib.clearArgs({
            api_key: apiKey,
            ids: gifIds
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
