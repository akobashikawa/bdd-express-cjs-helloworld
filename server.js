const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
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

module.exports = { up, down };
