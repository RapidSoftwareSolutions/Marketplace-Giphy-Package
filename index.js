'use strict';

const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

const PORT          = process.env.PORT || 8080;

global.PACKAGE_NAME = "Giphy";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

let callback = (err, res, r, fields) => {
    let response = {
        callback     : "",
        contextWrites: {}
    };
        
    if(err) {
        response.callback = 'error';
        response.contextWrites[r.to] = !fields ? JSON.parse(r.result || err) : {message: err, fields};
    } else {
        response.callback = 'success';
        response.contextWrites[r.to] = JSON.parse(r.result);
    }

    res.status(200).send(response);
}

fs.readdirSync('api/').forEach((file) => {
    try {
        var type    = file.substring(file.lastIndexOf('.') + 1),
            route   = file.substring(0, file.length - type.length - 1);

       if(!type == 'js') return;

       let fn = require(`./api/${file}`);
       app.post(`/api/${PACKAGE_NAME}/${route}`, function(req, res) {return fn(req, res, callback)});
    } catch(e) { 
        console.log(e);
        return; 
    }
});

app.listen(PORT);
module.exports = app;

