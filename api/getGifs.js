const lib     = require('../lib/functions');
const request = require("request");
const util = require('util');

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
    newGifIds = util.isArray(gifIds) ? gifIds.join() : gifIds;

    request({

        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs',
        qs: lib.clearArgs({
            api_key: apiKey,
            ids: newGifIds
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
