const express = require('express');
const app = express();

const helloworldService = require('./lib/helloworld-service');

app.get('/', (req, res) => {
    const message = helloworldService();
    res.send(`<div class="message">${message}</div>`);
});

let server;
let serverStatus = false;

const up = () => {
    return new Promise((resolve, reject) => {
        server = app.listen(3000, (err) => {
            if (err) {
                return reject(err);
            }
            console.log('Server is running on http://localhost:3000');
            serverStatus = true;
            resolve(server);
        });
    });
};

const down = () => {
    return new Promise((resolve, reject) => {
        if (serverStatus) {
            server.close((err) => {
                if (err) {
                    return reject(err);
                }
                console.log('Server stopped');
                serverStatus = false;
                resolve();
            });
        } else {
            resolve();
        }
    });
};

const status = () => {
    return serverStatus;
};

module.exports = { up, down, status };
