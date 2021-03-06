const lib     = require('../lib/functions');
const request = require("request");
const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync
const util = require('util');

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        apiKey,
        username,
        sourceImage,
        tags,
        sourcePostUrl,
        isHidden,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        callback('Fill in required fields.', res, {to}, ['apiKey']);
        return;
    }
    tags = util.isArray(tags) ? tags.join() : tags;
    function IsJsonString(str) {
        try {
          parsedString =   JSON.parse(str);
        } catch (e) {
            return false;
        }
        return parsedString;
    }
    tags = IsJsonString(tags)? IsJsonString(tags).join() : tags ;

    request.post('http://upload.giphy.com/v1/gifs', {
        form: {
            api_key:          apiKey,
            username:         username,
            source_post_url:  sourcePostUrl,
            source_image_url: sourceImage,
            tags:             tags,
            is_hidden:        isHidden,
        }
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result});
    });

}
