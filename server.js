const http          = require('http');
const https         = require('https');
const express       = require('express');
const bodyParser    = require('body-parser');

const serverConf    = require('./config/server-conf.json');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static('./app'));

http.createServer(app).listen(serverConf.port, serverConf.domain, () => {
    console.log('Server deployed on http://' + serverConf.domain + ':' + serverConf.port);
});
