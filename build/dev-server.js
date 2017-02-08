var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');

var app = express();
var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// detecte *.html files change 
compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    })
})

app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listen at http://localhost:3000');
})