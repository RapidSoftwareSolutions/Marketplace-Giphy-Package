const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const apiKey = 'dc6zaTOxFJmzC',
    query   = 'test',
    limit    = 1,
    lang     = 'en',
    text     = 'test',
    gifId    = 'RmHTAshaMOt8I',
    gifIds   = 'RmHTAshaMOt8I,l2SpRv6eIqbgm7hZe';

describe(`${PACKAGE_NAME} package`, () => {   
    it('/searchGifs', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/searchGifs`)
        .send({args:{apiKey, query, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getTrendingGifs', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getTrendingGifs`)
        .send({args:{apiKey, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/translateTextToGif', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/translateTextToGif`)
        .send({args:{apiKey, text}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getRandomGif', function() {
        this.timeout(5000);
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getRandomGif`)
        .send({args:{apiKey}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getGif', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getGif`)
        .send({args:{apiKey, gifId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getGifs', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getGifs`)
        .send({args:{apiKey, gifIds}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/searchStickers', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/searchStickers`)
        .send({args:{apiKey, query, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getTrendingStickers', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getTrendingStickers`)
        .send({args:{apiKey, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/translateTextToSticker', () => {
        return request(app)
        .post(`/api/${PACKAGE_NAME}/translateTextToSticker`)
        .send({args:{apiKey, text}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getRandomSticker', function() {
        this.timeout(5000);
        return request(app)
        .post(`/api/${PACKAGE_NAME}/getRandomSticker`)
        .send({args:{apiKey}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});