module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            let stringify = JSON.stringify(obj[i]);

            if(stringify == '{}' || stringify == '[]') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}

module.exports.randomString = () => Math.random().toString(36).substring(10);