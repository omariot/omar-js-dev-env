import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const port = 3000;
const app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log('Server running in port ' + port);
        open('http://localhost:' + port, {app: ['chrome']});
    }
});
